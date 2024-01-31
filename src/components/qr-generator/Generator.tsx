"use client"
import { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';

export default function Generator() {
    const [url, setUrl] = useState('');

    return (
        <section className="flex flex-col justify-center items-center gap-10">

            {url === '' ? (
                <p className="text-2xl">Ingresa una URL</p>
            ) : (
                <QRCode value={url}  renderAs="svg" size={256}/>
            )
            }

            <input
                className='p-2 border-2 border-gray-300 rounded-md'
                type="text"
                placeholder="Ingresa la URL"
                onChange={(event) => setUrl(event.target.value)}
                value={url}
            />
        </section>
    );
}
