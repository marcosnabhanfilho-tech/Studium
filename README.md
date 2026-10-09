# Studium Generale

A reel-style learning platform — Reels/Shorts for the intellect — built in a weekend, free forever, for friends.

Theology (Aquinas, Augustine, Newman, Chesterton, Corrêa de Oliveira), Philosophy (Aristotle, Anscombe, MacIntyre), Austrian Economics (Mises, Hayek, Menger), Finance (Buffett, Munger, Marks, Taleb), Beauty (Vermeer, Caravaggio, Michelangelo, Chartres, Mozart, Scruton), Perception (Doyle's Holmes, memory palaces), History (Burke, Tocqueville, Kirk).

## Deploy

### 1. Supabase (one-time)

1. Open your Supabase project → **SQL Editor** → **New query**.
2. Paste the contents of `supabase-migration.sql` and click **Run**. This creates the tables (`profiles`, `seen`, `thesaurus`, `votes`) with Row Level Security, and auto-creates a profile row whenever someone signs up.
3. In **Authentication → URL Configuration**, add your GitHub Pages URL as a redirect URL once you know it (e.g. `https://<your-user>.github.io/studium/**`).

### 2. GitHub Pages

```bash
# From this directory:
git init
git add -A
git commit -m "Studium Generale v1"
git branch -M main
# Create a new PUBLIC repo on github.com called "studium" and then:
git remote add origin https://github.com/<your-user>/studium.git
git push -u origin main
```

Then on github.com:
- Repo **Settings** → **Pages**
- **Source**: *Deploy from a branch*
- **Branch**: `main` / `/ (root)` → **Save**

Wait a minute. Your site is live at `https://<your-user>.github.io/studium/`.

### 3. Update Supabase

Copy that URL back into Supabase → Auth → URL Configuration → Redirect URLs:
- `https://<your-user>.github.io/studium/**`

Save. Magic-link sign-in now works.

## What's in it

- **70 handcrafted folios** across 7 faculties.
- **Snap-scroll vertical reel** — swipe up for the next, exactly like Reels.
- **Faculty chips** at top to filter by subject.
- **Collection**: every folio you view is permanently added to its Wing. Finish a wing for a Degree.
- **Thesaurus**: double-tap any folio to keep it. Persists in the cloud if you sign in.
- **Live polls**: Suffragium cards show the real-time distribution of what everyone else answered.
- **YouTube embeds**: Bishop Barron, Peterson, Pageau, Fr. Mike Schmitz, Matt Fradd.
- **Real paintings**: Vermeer, Caravaggio, Michelangelo, Chartres, Turner — loaded from Wikimedia Commons.
- **Quaestiones**: scholastic questions with reveals. Correct answer plays a bell.
- **Daily Rule**: read ten folios to keep the day. Merciful, no reset-to-zero shame.
- **Sound**: synthesized bells & chimes. Mutable with ♪.
- **PWA**: installable on iPhone (Share → Add to Home Screen) and Android.
- **Offline**: once loaded, works without network.
- **Sync**: sign in with your email; progress syncs across all your devices.

## Costs

$0, forever, up to 50,000 monthly active users (Supabase free tier limits).

## Add more content

Edit `content.js`. Each folio is a plain object. Push → GitHub Pages redeploys automatically.
