import { serve } from 'https://deno.land/std@0.131.0/http/server.ts';

console.log("Edge function deployed!");

serve(async (req) => {
  try {
    console.log(req.json())
    const { fileName, fileUrl } = await req.json();

    // // Call the third-party API with the file info
    // const response = await fetch('https://third-party-api.com/endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer YOUR_API_KEY`,
    //   },
    //   body: JSON.stringify({ fileName, fileUrl }),
    // });

    // if (!response.ok) {
    //   return new Response('Failed to call third-party API', { status: 500 });
    // }

    // return new Response('File processed successfully!');
  } catch (error) {
    console.error('Error processing file:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
});