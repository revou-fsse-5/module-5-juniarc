export function urlParser(array: any[]) {
	if (!array || array.length === 0) {
		return [];
	}
	return array.map((item) => {
		try {
			const match = item.match(/https:\/\/.*?\.(jpg|jpeg|png|gif|bmp|svg)/i);
			return match ? match[0] : item;
		} catch (error) {
			return [item];
		}
	});
}

export function parseImages(images: any[]) {
	if (!images || images.length === 0) {
		return [];
	}
	try {
		const joinedString = images.join('');
		const cleanString = joinedString
			.replace(/\\/g, '')
			.replace(/\"(\s*[\[\{\:])/g, '$1')
			.replace(/(\s*[\]\}\,])\"/g, '$1');
		return JSON.parse(cleanString);
	} catch (error) {
		return images;
	}
}
