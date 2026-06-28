# questionnaire

存放问卷Schema和问卷YAML的地方（适配[wenjuanxing-parser](https://github.com/CollegesChat/wenjuanxing-parser)）

Schema使用方式：

在YAML文件头放置：
```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/CollegesChat/questionnaire/refs/heads/main/schema.json
```

schema来自 [CollegesChat/wenjuanxing-parser/tests/_generate_json_schema.py](https://github.com/CollegesChat/wenjuanxing-parser/blob/main/tests/_generate_json_schema.py) 自动生成