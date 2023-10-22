import JSZip from 'jszip';

export class ZipFile extends JSZip {
	async download() {
		const data = await this.generateAsync({ type: 'base64' });
		window.location = 'data:application/zip;base64,' + data;
	}
}
