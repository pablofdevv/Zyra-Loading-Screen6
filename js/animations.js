/**
 * ==========================================================================
 *        MÓDULO DE TRANSICIONES Y REVEALS - ZYRA EDITORIAL (PREMIUM)
 * ==========================================================================
 */

class ZyraAnimations {
    constructor() {
        this.init();
    }

    init() {
        const sections = document.querySelectorAll('.editorial-section');
        sections.forEach((sec, idx) => {
            sec.style.opacity = '0';
            sec.style.transform = 'translateY(12px)';
            sec.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            sec.style.transitionDelay = `${0.3 + (idx * 0.1)}s`;
            
            setTimeout(() => {
                sec.style.opacity = '1';
                sec.style.transform = 'translateY(0)';
            }, 50);
        });
    }
}
window.ZyraAnimations = ZyraAnimations;
