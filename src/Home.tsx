import React, { useEffect } from 'react';

const Home = ()=> {
    let [pdfDocument, setPdfDocument] = React.useState(null);

    const loadPdfDocument = async ()=> {
        const result = await window.BackendServices.PdfDocument.get();

        setPdfDocument(result);
    };

    return (
        <div>
            <section className='reading-scene'>
                <div className='reading-scene-left'></div>
                <div className='reading-scene-center' onClick={loadPdfDocument}>
                    {pdfDocument}
                </div>
                <div className='reading-scene-right'></div>
            </section>
        </div>
    );
};

export default Home;