### Задание
Объедините коммиты с комментарием "fix git.md" в один коммит, то же самое сделайте с коммитами "fix cli.md".\
Измените комментарий коммита "fix something" на "fix README.md".

#### Решение
```git rebase -i HEAD~10```

```
pick fa0bd86 add notes about cooking
pick 44e1558 remove images
pick 6cb1bfc remove cooking.md
pick 15da82c fix cli.md
squash d4ae3e8 fix cli.md
squash 6836505 fix cli.md
squash 05cc245 fix cli.md
reword 9a592d5 fix something
pick 74407fe fix git.md
squash c3f34c5 fix git.md
```