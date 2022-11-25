import * as React from "react";
import "./style.css";

export default function App() {
  React.useEffect(() => {
    navigator.permissions
      .query({ name: "clipboard-write" as PermissionName })
      .then((result) => {
        console.log(result.state);
        if (result.state === "granted" || result.state === "prompt") {
          /* write to the clipboard now */
          console.log("Permission granted");
        }
      });
  }, []);

  const copyRichText = React.useCallback(async () => {
    const plainText = "https://inablink/#demo-linkhey";

    const richText =
      "<meta charset='utf-8'>" +
      document.querySelector("a").outerHTML +
      "<br/>";

    const richTextBlob = new Blob([richText], { type: "text/html" });
    const plainTextBlob = new Blob([plainText], { type: "text/plain" });
    const data = [
      new ClipboardItem({
        "text/html": richTextBlob,
        "text/plain": plainTextBlob,
      }),
    ];

    if ("clipboard" in navigator) {
      navigator.clipboard
        .write(data)
        .then(() => console.log("Copy Done"))
        .catch((err) => console.log(err));
    } else {
      const result = document.execCommand("copy", true, plainText);
      console.log("COPY exec: ", result);
      return;
    }
  }, []);

  return (
    <div>
      <h1>Clipboard multi mime type demo</h1>
      <p>
        Two different mime type will be copied in your clipboard,{" "}
        <code>text/html</code> and <code>text/plain</code>
      </p>
      <button onClick={copyRichText}>Copy rich text</button>
      <hr />
      <a
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        style={{
          textDecoration: "none",
          textDecorationColor: "#3389FF",
          padding: 8,
          display: "inline-block",
          border: "1.5px solid #f3f3f3",
          borderRadius: 12,
          width: 360,
        }}
        href="https://inablink.io/#quick-link-preview"
      >
        <img
          width="360"
          style={{ borderRadius: 8 }}
          src="https://user-images.githubusercontent.com/32040951/203973885-071abf8c-b09a-46eb-b57b-3fdb614b984e.jpg"
          alt="Your document preview button"
        />
        <table width="100%">
          <tbody>
            <tr>
              <td>
                <p
                  style={{
                    fontFamily:
                      "'Poppins', 'system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'",
                    margin: "2px 0px 2px 0px",
                    lineHeight: "100%",
                    display: "inline",
                    width: "65%",
                    color: "#3389FF",
                    textDecorationColor: "#3389FF",
                    textDecoration: "underline",
                  }}
                >
                  Dossier de location John Doe.pdf
                </p>
              </td>
              <td align="right">
                <p
                  style={{
                    fontFamily:
                      "'Poppins', 'system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'",
                    margin: "2px 0px 2px 0px",
                    lineHeight: "100%",
                    display: "inline",
                    width: "35%",
                    textAlign: "right",
                    color: "gray",
                  }}
                >
                  inablink.io
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </a>
    </div>
  );
}
