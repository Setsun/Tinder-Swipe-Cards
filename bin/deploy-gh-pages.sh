#!/usr/bin/env bash

echo "Deploying Tinder Swipe Cards"

git checkout -B staging
rm .gitignore

touch dist/CNAME
echo 'setsun.io' >> dist/CNAME

git add dist
git -c user.name='Setsun' -c user.email='setsun@setsun.io' commit -m "deploy" --no-verify

git subtree split --prefix dist -b deploy
git push -f origin deploy:master

git reset --hard
git checkout develop
git branch -D staging
git branch -D deploy

echo "Deployed Tinder Swipe Cards"
