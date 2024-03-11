import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const QRCodeGenerator: React.FC = () => {
	const [text, setText] = useState<string>('');
	const [qrCodeUrl, setQRCodeUrl] = useState<string>('');

	const generateQR = () => {
		if (text.trim() !== '') {
			const encodedText = encodeURIComponent(text);
			const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedText}&size=200x200`;
			setQRCodeUrl(qrCodeUrl);
			toast.success('Your QR code is ready!');
		} else {
			toast.error('Please enter text to generate QR code!');
		}
	};

	return (
		<section className="h-screen bg-gray-800">
			<div className="max-w-xl mx-auto p-4">
				<Toaster position="bottom-center" reverseOrder={false} />
				<h1 className="text-3xl font-bold mb-4 text-center text-white">QR Code Generator</h1>
				<span className="flex gap-5 input-and-btn">
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Enter text to generate QR code"
						className="w-full border-[2px] border-orange-500 rounded py-2 px-4 focus:outline-none"
					/>
					<button
						onClick={generateQR}
						className="generate-btn bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-[270px]"
					>
						Generate QR Code
					</button>
				</span>
				{qrCodeUrl && (
					<div className="mt-4 text-center">
						<img src={qrCodeUrl} alt="QR Code" className="mx-auto" />
					</div>
				)}
			</div>
		</section>
	);
};

export default QRCodeGenerator;
