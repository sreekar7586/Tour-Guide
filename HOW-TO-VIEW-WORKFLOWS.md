# How to View Your GitHub Actions Workflows

## 🔍 Method 1: View in GitHub Web UI

### Step 1: Go to Your Repository
```
https://github.com/sreekar7586/Tour-Guide
```

### Step 2: Click "Actions" Tab
Look for the **Actions** tab in the navigation bar

### Step 3: You'll See Your Workflows

```
Tour-Guide / Actions
├─ All workflows
├─ Build and Test
├─ Build and Push Docker Images
├─ Deploy to Production
```

Each workflow shows:
- ✅ Status (Success/Failed/Running)
- 📅 When it ran
- 👤 Who triggered it
- ⏱️ How long it took

---

## 📊 View Each Workflow in Detail

### **Workflow 1: Build and Test**

**Step 1:** Click "Build and Test" from the workflows list

**Step 2:** You'll see all runs:
```
Workflow Runs:
├─ ✅ 2026-05-25 10:30 - Push to main (3m 24s)
├─ ✅ 2026-05-25 09:15 - Pull request (2m 58s)
└─ ✅ 2026-05-25 08:42 - Push to develop (3m 12s)
```

**Step 3:** Click on any run to see details:
```
Jobs:
├─ build [18.x]
│  ├─ ✅ Checkout code
│  ├─ ✅ Setup Node.js
│  ├─ ✅ Install dependencies
│  ├─ ✅ Run tests
│  ├─ ✅ Build Docker images
│  ├─ ✅ Run services
│  ├─ ✅ Test API
│  └─ ✅ Stop services
│
└─ build [20.x]
   ├─ ✅ Checkout code
   ├─ ✅ Setup Node.js
   ├─ ✅ Install dependencies
   ├─ ✅ Run tests
   └─ ... (same steps)
```

**Step 4:** Click any step to see logs:
```
2026-05-25T10:30:42Z Checkout code
2026-05-25T10:30:45Z Set up Node.js 18.x
2026-05-25T10:30:52Z Cache dependencies
2026-05-25T10:30:55Z Install dependencies
2026-05-25T10:31:12Z Run backend tests
...
```

---

### **Workflow 2: Build and Push Docker Images**

**Step 1:** Click "Build and Push Docker Images"

**Step 2:** View push results:
```
Jobs:
├─ push
│  ├─ ✅ Checkout code
│  ├─ ✅ Setup Docker Buildx
│  ├─ ✅ Login to GHCR
│  ├─ ✅ Build backend image
│  ├─ ✅ Build frontend image
│  ├─ ✅ Push images to registry
│  └─ ✅ Notify completion
```

**Step 3:** See image tags:
```
Backend Image Pushed:
- ghcr.io/sreekar7586/tour-guide/backend:main
- ghcr.io/sreekar7586/tour-guide/backend:latest
- ghcr.io/sreekar7586/tour-guide/backend:sha-abc123

Frontend Image Pushed:
- ghcr.io/sreekar7586/tour-guide/frontend:main
- ghcr.io/sreekar7586/tour-guide/frontend:latest
- ghcr.io/sreekar7586/tour-guide/frontend:sha-abc123
```

---

### **Workflow 3: Deploy to Production**

**Step 1:** Click "Deploy to Production"

**Step 2:** Trigger manually (if needed):
```
Click "Run workflow" button
├─ Select environment
│  ├─ staging
│  └─ production
└─ Click "Run workflow"
```

**Step 3:** View deployment steps:
```
Jobs:
├─ deploy
│  ├─ ✅ Checkout code
│  ├─ ✅ Set deployment environment
│  ├─ ✅ Deploy using docker-compose
│  ├─ ✅ Run health checks
│  ├─ ✅ Verify deployment
│  └─ ✅ Slack notification
```

---

## 🎬 View Live Example

### GitHub Repository Layout
```
https://github.com/sreekar7586/Tour-Guide
│
├─ Code
│  ├─ README.md
│  ├─ CI-CD-PIPELINE.md
│  ├─ CI-CD-ARCHITECTURE.md
│  ├─ docker-compose.yml
│  ├─ backend/
│  └─ frontend/
│
├─ Actions ← YOU ARE HERE
│  ├─ Workflows
│  │  ├─ build-test.yml
│  │  ├─ docker-push.yml
│  │  └─ deploy.yml
│  │
│  ├─ All workflows
│  ├─ Build and Test
│  ├─ Build and Push Docker Images
│  └─ Deploy to Production
│
└─ Settings
   └─ Secrets (for credentials)
```

---

## 📈 Real Example: Viewing a Successful Run

### Visit this URL:
```
https://github.com/sreekar7586/Tour-Guide/actions
```

You'll see a dashboard:

```
┌─────────────────────────────────────────────────┐
│         GitHub Actions - Tour-Guide              │
├─────────────────────────────────────────────────┤
│                                                 │
│  🟢 Build and Test                              │
│     Latest run: main (2026-05-25 10:30)        │
│     Status: ✅ Success (3m 24s)                │
│     Triggered by: User push                     │
│                                                 │
│  🟢 Build and Push Docker Images               │
│     Latest run: main (2026-05-25 10:35)        │
│     Status: ✅ Success (2m 15s)                │
│     Pushed: 2 images                           │
│                                                 │
│  🔵 Deploy to Production                        │
│     Status: Waiting for manual trigger         │
│     Click "Run workflow" to deploy             │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 🔗 Direct Links to View Each Workflow

Click these links directly:

### Workflow 1 - Build and Test
```
https://github.com/sreekar7586/Tour-Guide/actions/workflows/build-test.yml
```

### Workflow 2 - Docker Push
```
https://github.com/sreekar7586/Tour-Guide/actions/workflows/docker-push.yml
```

### Workflow 3 - Deploy
```
https://github.com/sreekar7586/Tour-Guide/actions/workflows/deploy.yml
```

### All Workflows
```
https://github.com/sreekar7586/Tour-Guide/actions
```

---

## 📊 Show Workflow Status Badge in README

Add this to your README.md to show workflow status:

```markdown
# Smart Tour Guide

## CI/CD Status

[![Build and Test](https://github.com/sreekar7586/Tour-Guide/actions/workflows/build-test.yml/badge.svg)](https://github.com/sreekar7586/Tour-Guide/actions/workflows/build-test.yml)

[![Docker Push](https://github.com/sreekar7586/Tour-Guide/actions/workflows/docker-push.yml/badge.svg)](https://github.com/sreekar7586/Tour-Guide/actions/workflows/docker-push.yml)

[![Deploy](https://github.com/sreekar7586/Tour-Guide/actions/workflows/deploy.yml/badge.svg)](https://github.com/sreekar7586/Tour-Guide/actions/workflows/deploy.yml)
```

**Result in README:**
```
Build and Test: [✅ Passing]
Docker Push: [✅ Passing]
Deploy: [⏳ No recent runs]
```

---

## 🖥️ View from Command Line

### List all workflows
```bash
gh workflow list --repo sreekar7586/Tour-Guide
```

### View specific workflow runs
```bash
gh run list --repo sreekar7586/Tour-Guide --workflow build-test.yml
```

### View workflow logs
```bash
gh run view <run-id> --repo sreekar7586/Tour-Guide --log
```

### Trigger workflow manually
```bash
gh workflow run deploy.yml -r main --repo sreekar7586/Tour-Guide
```

---

## 📱 Mobile View

If on phone, visit:
```
https://github.com/sreekar7586/Tour-Guide/actions
```

The mobile view shows:
- ✅ Recent workflows
- 📊 Status indicators
- ⏱️ Duration
- 👤 Trigger info

---

## 🎯 Step-by-Step to See Your First Workflow Run

### 1. Make a test commit
```bash
cd c:\Users\sreek\Desktop\tour-guide
echo "# Test" >> README.md
git add README.md
git commit -m "Test workflow trigger"
git push origin main
```

### 2. Open GitHub Actions
```
https://github.com/sreekar7586/Tour-Guide/actions
```

### 3. Watch workflow run live
You should see:
- 🟡 "Build and Test" - Running
- Workflows execute in sequence
- ✅ When complete, shows success

### 4. Click the run
See all steps and logs

---

## 📋 What Each View Shows

| View | Shows | Location |
|------|-------|----------|
| **Actions Tab** | All workflows overview | `/actions` |
| **Workflow Page** | All runs of one workflow | `/actions/workflows/build-test.yml` |
| **Run Details** | Specific run steps & logs | Click any run |
| **Step Logs** | Console output of each step | Click any step |
| **Artifacts** | Downloaded files/reports | Run details → Artifacts |
| **Annotations** | Warnings/errors highlighted | Run summary |

---

## ✅ Quick Reference

### To Show:
- **All workflows**: Go to `/actions`
- **Specific workflow**: Go to `/actions/workflows/name.yml`
- **Workflow logs**: Click workflow → Click run → View logs
- **Step details**: Click step name in run
- **Status badges**: Add to README
- **Run manually**: Click "Run workflow" button

---

**Everything is visible in GitHub! Just navigate to the Actions tab. 🚀**
