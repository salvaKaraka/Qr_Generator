"use client"
import { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';

export default function Generator() {
    const [url, setUrl] = useState('');

    const handleDownload = () => {
        const qrContainer = document.getElementById('qr-container');

        if (qrContainer) {
            html2canvas(qrContainer).then((canvas) => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL();
                link.download = 'codigo_qr.png';
                link.click();
            });
        }
    };

    return (
        <section className="m-auto p-10 bg-white rounded-2xl flex flex-col md:flex-row justify-center items-center gap-20 w-full">
            { url === '' ? 
            <img src="/placeholder.png" alt="QR Placeholder" className="w-[256px] filter h-auto" />
            : 
            <div id="qr-container">
                <QRCode value={url} renderAs="svg" size={256}/>
            </div>
            }

            <div className='flex flex-col gap-5 w-full'>
                <p className='w-full text-xl md:text-2xl text-blue-500 font-bold '>Ingrese una URL:</p>
                <input
                    className='bg-neutral-200 w-full p-2 focus:border-blue-500 border-blue-100 border-2 focus:bg-white outline-none rounded-md transition-all'
                    type="text"
                    placeholder="Ingresa una URL"
                    onChange={(event) => setUrl(event.target.value)}
                    value={url}
                />
                <button className='w-full p-2 bg-blue-500 text-white rounded-md' onClick={handleDownload}> Descargar </button>
            </div>
        </section>
    );
}
