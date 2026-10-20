import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SquareArrowOutUpRight, ChevronLeft, ChevronRight } from "lucide-react";

// Simple utility for merging tailwind classes locally (or you can use clsx/tailwind-merge)
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

/**
 * Wraps an index to always be within [0, len-1].
 * Example: wrapIndex(-1, 5) -> 4
 */
function wrapIndex(n, len) {
    if (len <= 0) return 0;
    return ((n % len) + len) % len;
}

/** 
 * Calculate minimal signed offset from active index to i, with wrapping (for loop behavior).
 * e.g. if active=0, len=5, i=4, offset should be -1 (not +4)
 */
function signedOffset(i, active, len, loop) {
    const raw = i - active;
    if (!loop || len <= 1) return raw;

    // consider wrapped alternative
    const alt = raw > 0 ? raw - len : raw + len;
    return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function CardStack({
    items,
    initialIndex = 0,
    maxVisible = 7,

    cardWidth = 520,
    cardHeight = 320,

    overlap = 0.48, // Reduced overlap slightly so more of the next card is visible behind
    spreadDeg = 8, // Reduced spread to keep it tighter

    perspectivePx = 1100,
    depthPx = 140,
    tiltXDeg = 12,

    activeLiftPx = 22,
    activeScale = 1.03,
    inactiveScale = 0.94,

    springStiffness = 280,
    springDamping = 28,

    loop = true,
    autoAdvance = false,
    intervalMs = 4000,
    pauseOnHover = true,

    showDots = true,
    className,

    onChangeIndex,
    renderCard,
}) {
    const reduceMotion = useReducedMotion();
    const len = items.length;

    const [active, setActive] = React.useState(() =>
        wrapIndex(initialIndex, len),
    );
    const [hovering, setHovering] = React.useState(false);

    // Refs for hover navigation (slide on mouse move)
    const containerRef = React.useRef(null);
    const lastNavTime = React.useRef(0);

    // keep active in bounds if items change
    React.useEffect(() => {
        setActive((a) => wrapIndex(a, len));
    }, [len]);

    React.useEffect(() => {
        if (!len) return;
        onChangeIndex?.(active, items[active]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    const maxOffset = Math.max(0, Math.floor(maxVisible / 2));

    const cardSpacing = Math.max(10, Math.round(cardWidth * (1 - overlap)));
    const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

    const canGoPrev = loop || active > 0;
    const canGoNext = loop || active < len - 1;

    const prev = React.useCallback(() => {
        if (!len) return;
        if (!canGoPrev) return;
        setActive((a) => wrapIndex(a - 1, len));
    }, [canGoPrev, len]);

    const next = React.useCallback(() => {
        if (!len) return;
        if (!canGoNext) return;
        setActive((a) => wrapIndex(a + 1, len));
    }, [canGoNext, len]);

    // keyboard navigation (when container focused)
    const onKeyDown = (e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
    };

    // Mouse move navigation (Slide on side hover)
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const normalizedX = x / width;

        const now = Date.now();
        if (now - lastNavTime.current < 1000) return; // 1s cooldown

        if (normalizedX > 0.8) {
            next();
            lastNavTime.current = now;
        } else if (normalizedX < 0.2) {
            prev();
            lastNavTime.current = now;
        }
    };

    // autoplay
    React.useEffect(() => {
        if (!autoAdvance) return;
        if (reduceMotion) return;
        if (!len) return;
        if (pauseOnHover && hovering) return;

        const id = window.setInterval(
            () => {
                if (loop || active < len - 1) next();
            },
            Math.max(700, intervalMs),
        );

        return () => window.clearInterval(id);
    }, [
        autoAdvance,
        intervalMs,
        hovering,
        pauseOnHover,
        reduceMotion,
        len,
        loop,
        active,
        next,
    ]);

    if (!len) return null;

    const activeItem = items[active];

    return (
        <div className={cn("w-full relative", className)}>

            {/* --- MOBILE VIEW: Vertical List --- */}
            <div className="md:hidden w-full flex flex-col items-center px-6 gap-8 pb-12">
                {items.map((item) => (
                    <div key={item.id} className="w-full max-w-sm h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-[#0b1120] relative shadow-xl">
                        <div className="absolute inset-0">
                            {item.imageSrc ? (
                                <img src={item.imageSrc} alt={item.title} className="h-full w-full object-cover" />
                            ) : (
                                <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${item.gradient || 'from-slate-800 to-slate-900'}`}>
                                    <span className="text-slate-500 text-sm">No Image</span>
                                </div>
                            )}
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-90" />

                        <div className="relative z-10 flex h-full flex-col justify-end p-6">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                {(item.category || item.tag) && (
                                    <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit">
                                        {item.category || item.tag}
                                    </span>
                                )}
                                {Array.isArray(item.tags) && item.tags.map((tag, idx) => (
                                    <span key={idx} className="inline-block px-2 py-0.5 text-[9px] font-mono font-medium text-slate-400 bg-white/5 border border-white/10 rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-black text-white mb-2 leading-tight">{item.title}</h3>
                            {item.description && (
                                <p className="line-clamp-3 text-sm text-slate-300 font-medium leading-relaxed max-w-[95%]">
                                    {item.description}
                                </p>
                            )}
                            {item.link && item.link !== "#" && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 px-6 py-2 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all w-fit flex items-center gap-2"
                                >
                                    Visit Site <SquareArrowOutUpRight size={12} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>


            {/* --- DESKTOP VIEW: 3D Stack --- */}
            <div
                ref={containerRef}
                className="hidden md:flex w-full relative py-20 flex-col items-center"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onMouseMove={handleMouseMove}
            >
                {/* Stage */}
                <div
                    className="relative w-full flex justify-center outline-none"
                    style={{ height: Math.max(380, cardHeight + 80), perspective: `${perspectivePx}px` }}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                >
                    {/* Glow Effects - Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative w-full max-w-4xl flex justify-center items-center h-full">
                        <AnimatePresence initial={false}>
                            {items.map((item, i) => {
                                const off = signedOffset(i, active, len, loop);
                                const abs = Math.abs(off);
                                const visible = abs <= maxOffset;

                                // Hide distant cards
                                if (!visible) return null;

                                // Fan geometry
                                const rotateZ = off * stepDeg;
                                const x = off * cardSpacing;
                                const y = abs * 10;
                                const z = -abs * depthPx;

                                const isActive = off === 0;

                                const scale = isActive ? activeScale : inactiveScale;
                                const lift = isActive ? -activeLiftPx : 0;
                                const rotateX = isActive ? 0 : tiltXDeg;
                                const zIndex = 100 - abs;

                                // Drag Logic
                                const dragProps = isActive
                                    ? {
                                        drag: "x",
                                        dragConstraints: { left: 0, right: 0 },
                                        dragElastic: 0.18,
                                        onDragEnd: (e, info) => {
                                            if (reduceMotion) return;
                                            const travel = info.offset.x;
                                            const v = info.velocity.x;
                                            const threshold = Math.min(160, cardWidth * 0.22);
                                            if (travel > threshold || v > 650) prev();
                                            else if (travel < -threshold || v < -650) next();
                                        },
                                    }
                                    : {};

                                return (
                                    <motion.div
                                        key={item.id}
                                        className={cn(
                                            "absolute transition-shadow duration-300",
                                            isActive ? "z-50 cursor-grab active:cursor-grabbing shadow-2xl shadow-blue-500/20" : "cursor-pointer opacity-80 hover:opacity-100"
                                        )}
                                        style={{
                                            width: '100%',
                                            maxWidth: cardWidth,
                                            height: cardHeight,
                                            zIndex,
                                            transformStyle: "preserve-3d",
                                        }}
                                        initial={
                                            reduceMotion
                                                ? undefined
                                                : {
                                                    opacity: 0,
                                                    y: y + 40,
                                                    x,
                                                    rotateZ,
                                                    rotateX,
                                                    scale,
                                                }
                                        }
                                        animate={{
                                            opacity: 1,
                                            x,
                                            y: y + lift,
                                            rotateZ,
                                            rotateX,
                                            scale,
                                            zIndex,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: springStiffness,
                                            damping: springDamping,
                                        }}
                                        onClick={() => setActive(i)}
                                        {...dragProps}
                                    >
                                        {/* Render Content */}
                                        <div className="w-full h-full relative rounded-3xl overflow-hidden border border-white/10 bg-[#0b1120] backdrop-blur-xl">
                                            {renderCard ? (
                                                renderCard(item, { active: isActive })
                                            ) : (
                                                <DefaultFanCard item={item} active={isActive} />
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Navigation controls */}
                {showDots && (
                    <div className="mt-8 flex items-center justify-center gap-3 relative z-30">
                        <button
                            onClick={prev}
                            className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-blue-600/30 hover:border-blue-500/30 transition-all active:scale-95"
                            aria-label="Previous project"
                            title="Previous project"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        <div className="flex items-center gap-2 p-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
                            {items.map((it, idx) => {
                                const on = idx === active;
                                return (
                                    <button
                                        key={it.id}
                                        onClick={() => setActive(idx)}
                                        className={cn(
                                            "h-2 w-2 rounded-full transition-all duration-300",
                                            on ? "bg-blue-500 w-6" : "bg-slate-600 hover:bg-slate-400"
                                        )}
                                        aria-label={`Go to ${it.title}`}
                                    />
                                );
                            })}
                        </div>

                        {(activeItem.link || activeItem.href) && (activeItem.link || activeItem.href) !== "#" && (
                            <a
                                href={activeItem.link || activeItem.href}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full bg-white/5 text-slate-400 hover:bg-blue-600 hover:text-white transition-all border border-white/5"
                                aria-label="Open link"
                                title="Visit live site"
                            >
                                <SquareArrowOutUpRight className="h-4 w-4" />
                            </a>
                        )}

                        <button
                            onClick={next}
                            className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-blue-600/30 hover:border-blue-500/30 transition-all active:scale-95"
                            aria-label="Next project"
                            title="Next project"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

function DefaultFanCard({ item, active }) {
    return (
        <div className="relative h-full w-full group">
            {/* Image Background */}
            <div className="absolute inset-0">
                {item.imageSrc ? (
                    <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        draggable={false}
                    />
                ) : (
                    <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${item.gradient || 'from-slate-800 to-slate-900'}`}>
                        <span className="text-slate-500 text-sm">No Image</span>
                    </div>
                )}
            </div>

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-90" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                    {(item.category || item.tag) && (
                        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit">
                            {item.category || item.tag}
                        </span>
                    )}
                    {Array.isArray(item.tags) && item.tags.map((tag, idx) => (
                        <span key={idx} className="inline-block px-2.5 py-0.5 text-[9px] font-mono font-medium text-slate-400 bg-white/5 border border-white/10 rounded-full">
                            #{tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                    {item.title}
                </h3>
                {item.description && (
                    <p className="line-clamp-3 text-sm text-slate-300 font-medium leading-relaxed max-w-[90%]">
                        {item.description}
                    </p>
                )}

                {active && (item.link || item.href) && (item.link || item.href) !== "#" && (
                    <a
                        href={item.link || item.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-4 px-6 py-2 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all w-fit flex items-center gap-2 shadow-lg shadow-white/10"
                    >
                        Visit Site <SquareArrowOutUpRight size={12} />
                    </a>
                )}
            </div>

            {/* Active Indicator Strip */}
            {active && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            )}
        </div>
    );
}
