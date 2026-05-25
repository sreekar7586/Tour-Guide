# GitHub Actions Setup Guide

## 🚀 Workflows Created

Your project now has 3 automated GitHub Actions workflows:

### 1. **Build and Test** (`.github/workflows/build-test.yml`)
- **Trigger**: On every `push` to `main` or `develop`, and on pull requests
- **Actions**:
  - ✅ Checkout code
  - ✅ Setup Node.js (v18 and v20)
  - ✅ Install dependencies
  - ✅ Run tests
  - ✅ Build Docker images
  - ✅ Start services with docker-compose
  - ✅ Test backend API
  - ✅ Test frontend
  - ✅ Cleanup

### 2. **Docker Push** (`.github/workflows/docker-push.yml`)
- **Trigger**: After successful build, on tags (v*), and when pushing to main
- **Actions**:
  - ✅ Build Docker images
  - ✅ Push to GitHub Container Registry (GHCR)
  - ✅ Push to Docker Hub (optional)
  - ✅ Auto-generate tags (latest, version, SHA)

### 3. **Deploy** (`.github/workflows/deploy.yml`)
- **Trigger**: Manual trigger or on push to main
- **Actions**:
  - ✅ Select environment (staging/production)
  - ✅ Deploy docker-compose stack
  - ✅ Run health checks
  - ✅ Send Slack notifications (optional)

---

## 🔐 Required Secrets

To enable all features, configure these GitHub secrets:

### For Docker Hub Push (Optional)
1. Go to: `https://github.com/yourusername/Tour-Guide/settings/secrets/actions`
2. Click "New repository secret"
3. Add:

| Secret Name | Value | Get From |
|------------|-------|----------|
| `DOCKER_USERNAME` | Your Docker Hub username | [Docker Hub](https://hub.docker.com/settings/security) |
| `DOCKER_PASSWORD` | Your Docker Hub token | [Docker Hub Access Tokens](https://hub.docker.com/settings/security) |

### For Deployment (Optional)
| Secret Name | Value | Get From |
|------------|-------|----------|
| `DEPLOY_HOST` | Your server IP/hostname | Your hosting provider |
| `DEPLOY_USER` | SSH username | Your server |
| `DEPLOY_KEY` | SSH private key | Generate with: `ssh-keygen -t rsa` |

### For Slack Notifications (Optional)
| Secret Name | Value | Get From |
|------------|-------|----------|
| `SLACK_WEBHOOK` | Slack webhook URL | [Slack API](https://api.slack.com/messaging/webhooks) |

---

## 📊 How to Add Secrets

### Step 1: Go to Repository Settings
```
GitHub → Your Repo → Settings → Secrets and Variables → Actions
```

### Step 2: Click "New repository secret"

### Step 3: Add Secret
```
Name: DOCKER_USERNAME
Value: your_docker_username
```

### Step 4: Repeat for each secret

---

## 🔄 Workflow Status

Check workflow status in GitHub:

```
Your Repo → Actions → See all workflows running
```

You'll see:
- ✅ Build and Test
- ✅ Build and Push Docker Images  
- ✅ Deploy to Production

Each with status indicators (success/failure)

---

## 📝 Test the Workflows

### Option 1: Direct Test (Recommended)
```bash
# Make a small change and commit
echo "# Updated" >> README.md
git add README.md
git commit -m "Test: Trigger GitHub Actions"
git push origin main
```

Then check: `https://github.com/yourusername/Tour-Guide/actions`

### Option 2: Manual Trigger
1. Go to `Actions` tab
2. Select "Deploy to Production"
3. Click "Run workflow"
4. Select environment (staging/production)
5. Click "Run workflow"

---

## 📈 Monitoring Workflows

### View Workflow Runs
```
GitHub → Actions → Select Workflow → View Runs
```

### Check Logs
```
Click on workflow run → Click on job → See step-by-step logs
```

### Download Artifacts
```
Workflow Run → Artifacts → Download
```

---

## 🎯 What Happens on Each Action

### On Push to Main:
```
1. Build & Test runs
   ├─ Node.js 18.x tests
   ├─ Node.js 20.x tests
   ├─ Docker build
   └─ API/Frontend tests

2. (If successful) Docker Push runs
   ├─ Push to GHCR
   ├─ Push to Docker Hub
   └─ Tag images

3. (Manual) Deploy runs
   ├─ Deploy to staging
   ├─ Health checks
   └─ Slack notification
```

### On Pull Request:
```
1. Build & Test runs (quality gate)
   ├─ Tests must pass
   ├─ Docker must build
   └─ Services must start
2. Block merge if failed
```

### On Tag (v1.0.0):
```
1. Build & Test runs
2. Docker Push tags with version
3. Manual deploy option
```

---

## 🚀 Complete CI/CD Flow

```
Your Code Push
    ↓
GitHub Actions Triggered
    ├─ Build & Test
    │   ├─ Install deps
    │   ├─ Run tests
    │   ├─ Build Docker
    │   └─ Test services
    ├─ Success?
    │   ├─ Yes → Docker Push
    │   │   ├─ Push to GHCR
    │   │   └─ Push to Hub
    │   └─ No → Fail & Notify
    │
    └─ Manual Deploy
        ├─ Select environment
        ├─ Deploy stack
        ├─ Health checks
        └─ Notify team
```

---

## ✅ Verification Checklist

- [ ] `.github/workflows/` directory created
- [ ] `build-test.yml` workflow created
- [ ] `docker-push.yml` workflow created
- [ ] `deploy.yml` workflow created
- [ ] Secrets configured (optional but recommended)
- [ ] First test run successful
- [ ] Workflow logs visible in Actions tab
- [ ] Docker images pushed to registry

---

## 🔗 Useful Links

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Build Action](https://github.com/docker/build-push-action)
- [Container Registry GHCR](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [Docker Hub](https://hub.docker.com)

---

## 💡 Next Steps

1. **Push these workflows to GitHub**
   ```bash
   git add .github/
   git commit -m "Setup GitHub Actions CI/CD pipeline"
   git push origin main
   ```

2. **Configure secrets** (if using Docker Hub/deployment)
   - Visit Settings → Secrets

3. **Trigger first workflow**
   - Make a commit and push
   - Watch Actions tab

4. **Monitor and optimize**
   - Check workflow logs
   - Adjust as needed

---

## 🆘 Troubleshooting

### Workflow won't start
- Check if `.github/workflows/` exists
- Verify YAML syntax is correct
- Ensure branch filter matches (main, develop)

### Tests failing
- Check workflow logs for error
- Run tests locally: `npm test`
- Push fix and retry

### Docker push failing
- Verify DOCKER_USERNAME and DOCKER_PASSWORD secrets
- Check Docker Hub credentials
- Ensure registry URL is correct

### Deployment failing
- Verify server credentials in secrets
- Check SSH key format
- Review deployment script syntax

---

**Happy CI/CD! 🚀**
