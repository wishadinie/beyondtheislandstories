<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Article content lives in src/lib/articles.ts and renders through the single /$category/$slug route; add stories there, not as new route files. Why: one template keeps every article consistent.
- Photos are centralised in src/lib/images.ts (src + credit); swap a URL there to replace an image site-wide.
