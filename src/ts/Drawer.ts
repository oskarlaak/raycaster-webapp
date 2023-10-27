export default class Drawer {

    private canvas: HTMLElement;
    private width: number;

    public constructor(canvas: HTMLElement, width: number) {
        this.canvas = canvas;
        this.width = width;
    }

    public prepareCanvas(): void {
        for (let i = 0; i < this.width; i++) {
            this.canvas.appendChild(document.createElement("div"));
        }
    }

    // public drawColumn(columnNumber: number, height: number, cssClassName: string) {

    // }
}
