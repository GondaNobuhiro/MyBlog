import React from "react";

function ContactForm() {
	return (
		<div className="container mx-auto p-4">
			<h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
			<form>
				<label className="block mb-2">
					名前:
					<input type="text" className="border p-2 w-full" />
				</label>
				<label className="block mb-2">
					メールアドレス:
					<input type="email" className="border p-2 w-full" />
				</label>
				<label className="block mb-2">
					メッセージ:
					<textarea className="border p-2 w-full"></textarea>
				</label>
				<button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
					送信
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
