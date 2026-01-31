/**
 * Smooth Scroll with Skew Effect
 * Adapted from Vanilla JS for React + TypeScript
 */

interface SmoothData {
  ease: number;
  current: number;
  last: number;
  rounded: number;
}

interface SmoothDOM {
  el: HTMLElement | null;
  content: HTMLElement | null;
}

const config = {
  height: typeof window !== "undefined" ? window.innerHeight : 0,
  width: typeof window !== "undefined" ? window.innerWidth : 0,
};

export class Smooth {
  private data: SmoothData;
  private dom: SmoothDOM;
  private rAF: number | null;
  private heightCheckInterval: number | null;

  constructor() {
    this.data = { ease: 0.1, current: 0, last: 0, rounded: 0 };
    this.dom = {
      el: document.querySelector("[data-scroll]"),
      content: document.querySelector("[data-scroll-content]"),
    };
    this.rAF = null;
    this.heightCheckInterval = null;

    // Bind methods
    this.scroll = this.scroll.bind(this);
    this.run = this.run.bind(this);
    this.resize = this.resize.bind(this);

    this.init();
  }

  private setStyles(): void {
    if (this.dom.el) {
      Object.assign(this.dom.el.style, {
        position: "fixed",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      });
    }
  }

  private setHeight(): void {
    if (this.dom.content) {
      const contentHeight = this.dom.content.getBoundingClientRect().height;
      document.body.style.height = `${contentHeight}px`;
    }
  }

  private resize(): void {
    config.width = window.innerWidth;
    config.height = window.innerHeight;
    this.setHeight();
    this.scroll();
  }

  private scroll(): void {
    this.data.current = window.scrollY;
  }

  private run(): void {
    this.data.last += (this.data.current - this.data.last) * this.data.ease;
    this.data.rounded = Math.round(this.data.last * 100) / 100;

    const diff = this.data.current - this.data.rounded;
    const acc = diff / config.width;
    const velo = +acc;
    const skew = velo * 7.5;

    if (this.dom.content) {
      this.dom.content.style.transform = `translate3d(0, -${this.data.rounded}px, 0) skewY(${skew}deg)`;
    }

    this.requestAnimationFrame();
  }

  private on(): void {
    this.setStyles();
    this.setHeight();
    this.addEvents();
    this.requestAnimationFrame();

    // Recalculate height periodically for first few seconds (for lazy-loaded content)
    let checks = 0;
    this.heightCheckInterval = window.setInterval(() => {
      this.setHeight();
      checks++;
      if (checks >= 5 && this.heightCheckInterval) {
        clearInterval(this.heightCheckInterval);
      }
    }, 500);
  }

  private off(): void {
    this.cancelAnimationFrame();
    this.removeEvents();
    document.body.style.height = "";

    if (this.heightCheckInterval) {
      clearInterval(this.heightCheckInterval);
    }

    // Reset content transform
    if (this.dom.content) {
      this.dom.content.style.transform = "";
    }

    // Reset wrapper styles
    if (this.dom.el) {
      this.dom.el.style.position = "";
      this.dom.el.style.top = "";
      this.dom.el.style.left = "";
      this.dom.el.style.height = "";
      this.dom.el.style.width = "";
      this.dom.el.style.overflow = "";
    }
  }

  private requestAnimationFrame(): void {
    this.rAF = window.requestAnimationFrame(this.run);
  }

  private cancelAnimationFrame(): void {
    if (this.rAF !== null) {
      window.cancelAnimationFrame(this.rAF);
    }
  }

  private addEvents(): void {
    window.addEventListener("resize", this.resize, { passive: true });
    window.addEventListener("scroll", this.scroll, { passive: true });
  }

  private removeEvents(): void {
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("scroll", this.scroll);
  }

  private init(): void {
    // Wait for entrance animations to complete before initializing
    setTimeout(() => {
      this.setHeight();
      this.on();
    }, 1500);
  }

  public destroy(): void {
    this.off();
  }
}
