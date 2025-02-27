import Repository from './lib/github';
import { REPO_OWNER, REPO, BRANCH } from './lib/configuration';
import { catchError, HTTPError } from '@/utils';
import { error as errorRedirect } from '@sveltejs/kit';

export async function load({ fetch }) {
	const repo = new Repository(REPO_OWNER, REPO, { branch: BRANCH, fetchFn: fetch });

	// prettier-ignore
	const [error, files] = await catchError(
		repo.listDirectory(`blog`),
		[HTTPError]
	);

	if (error) errorRedirect(404, { message: 'No posts not found' });

	return { files };
}
