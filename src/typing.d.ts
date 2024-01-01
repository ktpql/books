interface Window {
    BackendServices: {
        PdfDocument: {
            get(): () => Promise<string>;
        };
    };
}
 