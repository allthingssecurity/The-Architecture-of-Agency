# Agent Design Patterns (GitHub Book)

A neuroscience‑inspired handbook for building safe, reliable, and capable AI agents. This repository organizes the book into Markdown chapters, ready to publish with MkDocs + Material theme and GitHub Pages.

## Structure

- `mkdocs.yml`: Site config and navigation.
- `docs/`: Book content.
  - `index.md`: Landing page.
  - `preface/`, `introduction/`: Front matter.
  - `table-of-contents.md`: High-level outline.
  - `chapters/<nn>-<slug>/index.md`: Each chapter with an `assets/` folder for future videos/audios.

## Local Development

1. Create a virtual environment (optional but recommended):
   - `python -m venv .venv && source .venv/bin/activate`
2. Install dependencies:
   - `pip install -r requirements.txt`
3. Serve locally:
   - `mkdocs serve`
4. Open the site:
   - http://127.0.0.1:8000/

## Publish to GitHub Pages

- Ensure your repo is on GitHub.
- Use MkDocs’ built-in deploy:
  - `mkdocs gh-deploy --force`
- Or configure GitHub Pages to serve the `gh-pages` branch (Settings → Pages).

## Adding Media (later)

- Put chapter-specific videos/audios under `docs/chapters/<nn>-<slug>/assets/`.
- Reference in Markdown, e.g. `![Diagram](assets/diagram.png)` or embed audio/video tags as needed.

## Requirements

- Python 3.9+
- See `requirements.txt` for Python package versions.

## License

TBD by the repository owner.

