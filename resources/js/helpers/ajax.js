export default async function ajax(url, method = 'GET', body = {})
{
    return await fetch(url, {
        method: method,
        cache: 'no-cache',
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            // "X-CSRF-TOKEN": token
          },
          body
    })
}