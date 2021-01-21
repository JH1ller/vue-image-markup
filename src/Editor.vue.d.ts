declare const _default: {
    name: string;
    props: {
        canvasWidth: {
            type: (StringConstructor | NumberConstructor)[];
            required: boolean;
        };
        canvasHeight: {
            type: (StringConstructor | NumberConstructor)[];
            required: boolean;
        };
        editorId: {
            type: StringConstructor;
            default: string;
            required: boolean;
        };
    };
    data(): {
        canvas: any;
        pointerX: any;
        pointerY: any;
        createCircle: boolean;
        createRect: boolean;
        createArrow: boolean;
        createText: boolean;
        circle: any;
        currentActiveMethod: any;
        currentActiveTool: any;
        objects: any[];
        width: any;
        height: any;
        params: {};
        color: string;
        strokeWidth: number;
        fontSize: number;
        croppedImage: boolean;
        history: any[];
    };
    mounted(): void;
    methods: {
        getObjectsById(objectId: any): any[];
        changeColor(colorProperty: any): void;
        setBackgroundImage(imageUrl: any, backgroundColor?: string): void;
        toDataUrl(url: any, callback: any): void;
        clear(): void;
        serialize(): any;
        loadFromJSON(json: string): void;
        getCanvas(): any;
        set(type: any, params: any): void;
        saveImage(): any;
        uploadImage(e: any): void;
        customCircle(type: any, params: any): void;
        customRect(type: any, params: any): void;
        drawArrow(params: any): void;
        cancelCroppingImage(): void;
        applyCropping(): void;
        drag(): void;
        addText(params: any): void;
        undo(): void;
        redo(): void;
        drawing(params: any): void;
        drawRect(params: any): void;
        drawCircle(params: any): void;
    };
};
export default _default;
