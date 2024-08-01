# Javascript Assesment

Upload, delete and rename files using @vercel/blob and nextjs v14 with server actions.

[Assesment docs](https://docs.google.com/document/u/0/d/e/2PACX-1vQjRyBnqepBVHRplBRd54gkhiR3gAhXT0zNWqu2M-HzEkwwlCSMCawserIrcXyZ0IXPsG3L3Cj-eEH3/pub?urp=gmail_link&pli=1)

## Getting Started

To run the project locally:

```bash
git clone
cd project-directory
cp .env.local .env
(and fill BLOB_READ_WRITE_TOKEN)
yarn install
yarn dev
```

### Notes

To be considered, this was just a task (exercise) where I had to interpret the instructions without being able to ask questions to clarify the details.
Also keep in mind that I did the minimum and necessary, but obviously there is a lot that can be polished from the user experience, the loading states, the error messages and even the styles.

I do realize the user experience is not the best as it is but could be improve without to much adittions to the code, for this taks I only focused on the main functionality and the use of server actions to handle forms.

In regards to 1-a, 1-b and 1-c, I did not really understand what was the purpose of those (just calling a random 3rd party API), but I did leave some comments on the code to mark where I would make those calls if necesary, for example for tracing/observability/monitoring purposes (if those were important points we can always discuss it and I could make the changes needed).
