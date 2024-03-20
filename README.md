## Hướng dẫn sử dụng

Script này dùng [Bun js](https://bun.sh/docs/installation). Cài Bun cho Mac:

```bash
brew install oven-sh/bun/bun # homebrew
# hoặc
curl -fsSL https://bun.sh/install | bash
```

Xem thư mục `examples` để xem các tệp ví dụ.

Lưu ý trên backend cần chạy

```bash
make bash

mix gettext.extract
```

để lấy khoá dịch ra các tệp `pot` trước

- Sao chép phần cần dịch (các khoá dịch mới sau khi chạy `mix gettext.extract`)
  vào `data/input.pot`

- Chạy lệnh

```bash
bun run extract.ts
```

để tạo tệp `data/msgids.json`

- Dịch tệp này và bỏ kết quả vào tệp `data/msgstr-translated.json`

- Chạy lệnh

```bash
bun run compile.ts
```

để tạo tệp `data/output.po`

- Sao chép kết quả của tệp này vào tệp `po` tương ứng trong backend.

## References

https://github.com/smhg/gettext-parser

https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html
