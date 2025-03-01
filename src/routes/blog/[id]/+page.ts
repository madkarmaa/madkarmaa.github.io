import { repository } from '../lib/configuration';
import { catchError, HTTPError } from '@/utils';
import { error as errorRedirect } from '@sveltejs/kit';

// idk why this works but yeah: https://stackoverflow.com/a/76649202
export const prerender = 'auto';

export async function load({ fetch, params }) {
	const repo = repository.useFetchFn(fetch);

	// prettier-ignore
	const [error, content] = await catchError(
		repo.getRawFileContents(`blog-posts/${params.id}.md`),
		[HTTPError]
	);

	if (error) errorRedirect(404, { message: 'Post not found' });

	return { content };
}
