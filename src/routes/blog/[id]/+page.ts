import Repository from '../lib/github';
import { REPO_OWNER, REPO, BRANCH } from '../lib/configuration';
import { catchError, HTTPError } from '@/utils';

export async function load({ fetch, params }) {
	const repo = new Repository(REPO_OWNER, REPO, { branch: BRANCH, fetchFn: fetch });

	// prettier-ignore
	const [error, content] = await catchError(
		repo.getRawFileContents(`blog/${params.id}.md`),
		[HTTPError]
	);

	return { error, content };
}
