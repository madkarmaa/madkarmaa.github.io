import { repository } from './lib/configuration';
import { catchError, HTTPError } from '@/utils';
import { error as errorRedirect } from '@sveltejs/kit';

export async function load({ fetch }) {
	const repo = repository.useFetchFn(fetch);

	// prettier-ignore
	const [error, files] = await catchError(
		repo.listDirectory('blog-posts'),
		[HTTPError]
	);

	if (error) errorRedirect(404, { message: 'No posts found' });

	const posts = files
		.filter((file) => file.download_url && file.name.endsWith('.md'))
		//                            ^ this filters out directories
		.map((file) => {
			return {
				...file,
				// it fetches but doesn't block
				content_promise: repo.getRawFileContents(file.path)
			};
		});

	if (!posts || !posts.length) errorRedirect(404, { message: 'No posts found' });

	return { posts };
}
