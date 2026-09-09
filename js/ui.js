/**
 * ==========================================================================
 *        MÓDULO DE INTERFAZ DE USUARIO - ZYRA EDITORIAL (PREMIUM)
 * ==========================================================================
 */

class ZyraUI {
    constructor(config) {
        this.config = config || {};
        
        // Elementos DOM
        this.logoContainer = document.getElementById('logo-container');
        this.serverClaim = document.getElementById('server-claim');
        this.serverDescription = document.getElementById('server-description');
        this.socialsContainer = document.getElementById('social-links-grid');
        this.bgVideo = document.getElementById('bg-video');
        this.canvas = document.getElementById('particles-canvas');
        
        this.init();
    }

    init() {
        this.applyConfigToggles();
        this.renderBranding();
        this.renderSocials();
        this.renderBackgroundVideo();
        this.renderParticles();
        this.applyDynamicStyles();
    }

    applyConfigToggles() {
        const comps = this.config.components;
        if (!comps) return;

        // Ocultar música si está desactivada
        const musicCard = document.getElementById('music-card-wrapper');
        if (musicCard && !comps.enableMusic) {
            musicCard.classList.add('hidden');
        }

        // Ocultar redes si está desactivado
        const socialsPanel = document.getElementById('socials-panel');
        if (socialsPanel && !comps.enableSocials) {
            socialsPanel.classList.add('hidden');
        }
    }

    renderBranding() {
        if (!this.logoContainer) return;
        const brand = this.config.branding;

        if (brand.logoUrl) {
            this.logoContainer.innerHTML = `<img src="${brand.logoUrl}" alt="${brand.serverName}">`;
        } else {
            this.logoContainer.innerHTML = `<h1>${brand.serverName}</h1>`;
        }

        if (this.serverClaim) {
            this.serverClaim.innerText = brand.claim;
        }

        if (this.serverDescription) {
            this.serverDescription.innerText = brand.description;
        }
    }

    renderSocials() {
        if (!this.socialsContainer || !this.config.components.enableSocials) return;
        const socialsList = this.config.socials || [];
        
        let html = "";
        socialsList.forEach(social => {
            html += `
                <a href="${social.url}" target="_blank" class="social-btn">
                    <span>${social.name}</span>
                </a>`;
        });
        
        this.socialsContainer.innerHTML = html;
    }

    renderBackgroundVideo() {
        if (!this.bgVideo) return;
        const bg = this.config.background;

        if (this.config.components.enableBackgroundVideo && bg.videoUrl) {
            this.bgVideo.src = bg.videoUrl;
            this.bgVideo.style.opacity = bg.videoOpacity;
            this.bgVideo.classList.remove('hidden');
            this.bgVideo.play().catch(() => {});
        } else {
            this.bgVideo.classList.add('hidden');
        }
    }

    renderParticles() {
        if (!this.canvas) return;
        if (!this.config.components.enableParticles) {
            this.canvas.classList.add('hidden');
            return;
        } else {
            this.canvas.classList.remove('hidden');
        }
        
        const ctx = this.canvas.getContext('2d');
        let particlesArray = [];
        const count = this.config.background.particleCount || 40;
        const speed = this.config.background.particleSpeed || 0.4;

        const resize = () => {
            // Medir las dimensiones reales del panel izquierdo
            const parent = this.canvas.parentElement;
            this.canvas.width = parent.clientWidth;
            this.canvas.height = parent.clientHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor(width, height) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.2 + 0.3;
                this.speedX = (Math.random() - 0.5) * speed;
                this.speedY = (Math.random() - 0.5) * speed;
                this.opacity = Math.random() * 0.25 + 0.05;
            }

            update(width, height) {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > width) this.speedX = -this.speedX;
                if (this.y < 0 || this.y > height) this.speedY = -this.speedY;
            }

            draw() {
                ctx.fillStyle = `rgba(223, 186, 95, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particlesArray = [];
            for (let i = 0; i < count; i++) {
                particlesArray.push(new Particle(this.canvas.width, this.canvas.height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            particlesArray.forEach(p => {
                p.update(this.canvas.width, this.canvas.height);
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        init();
        animate();
    }

    applyDynamicStyles() {
        const theme = this.config.theme;
        const typo = this.config.typography;
        const root = document.documentElement;

        if (theme.colorPrimary) root.style.setProperty('--bg-pure-black', theme.colorPrimary);
        if (theme.colorSecondary) root.style.setProperty('--bg-charcoal-dark', theme.colorSecondary);
        if (theme.colorAccent) {
            root.style.setProperty('--accent-pure-white', theme.colorAccent);
            root.style.setProperty('--accent-glow', `rgba(${this.hexToRgb(theme.colorAccent)}, 0.25)`);
        }
        if (theme.colorTextPrimary) root.style.setProperty('--text-primary', theme.colorTextPrimary);
        if (theme.colorTextSecondary) root.style.setProperty('--text-secondary', theme.colorTextSecondary);
        if (theme.colorTextMuted) root.style.setProperty('--text-muted', theme.colorTextMuted);
        if (theme.colorBorder) root.style.setProperty('--border-editorial', `1px solid ${theme.colorBorder}`);
        if (theme.colorBorderActive) root.style.setProperty('--border-editorial-active', `1px solid ${theme.colorBorderActive}`);
        
        if (typo.fontFamily) root.style.setProperty('--font-body', typo.fontFamily);
        if (typo.fontSizeBase) root.style.setProperty('--font-size-base', typo.fontSizeBase);
    }

    hexToRgb(hex) {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
        }
        return '223,186,95';
    }
}
window.ZyraUI = ZyraUI;
