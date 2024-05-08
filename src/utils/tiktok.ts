const API_URL = 'https://tikwm.com/api/';

export const fetchTikTokUrlData = async (videoUrl: string) => {
    return await (
        await fetch(API_URL, {
            body: JSON.stringify({
                url: videoUrl,
                hd: 1,
                cursor: 0,
            }),
            method: 'POST',
        })
    ).json();
};
