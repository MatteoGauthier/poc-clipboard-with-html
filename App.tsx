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
      document.querySelectorAll("a")[0].outerHTML +
      "<br/>" +
      "<br/>" +
      document.querySelectorAll("a")[1].outerHTML +
      "<br/>" +
      "<br/>" +
      document.querySelectorAll("a")[2].outerHTML +
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

  const fileName = "Dossier de location.pdf";

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
        title={`Télécharger le fichier "${fileName}"`}
        style={{
          textDecoration: "none",
          textDecorationColor: "#3389FF",
          padding: 8,
          display: "inline-block",
          border: "1.5px solid #f3f3f3",
          borderRadius: 12,
          width: 360,
        }}
        href="https://inablink.io/RZD6qwZ9W8HrOvr6gODq#BdqmUpeRRGSxneIq62Mu3w"
      >
        <img
          width="360"
          style={{ borderRadius: 8 }}
          src="https://user-images.githubusercontent.com/32040951/203973885-071abf8c-b09a-46eb-b57b-3fdb614b984e.jpg"
          alt="Your document preview button"
        />
        <table style={{ borderSpacing: "0", marginTop: 2 }} width="100%">
          <tbody>
            <tr>
              <td>
                <p
                  style={{
                    fontFamily:
                      "'Poppins', 'system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'",
                    margin: "0",

                    lineHeight: "100%",
                    display: "block",
                    width: 240,
                    maxWidth: 240,
                    color: "#3389FF",
                    textDecoration: "none",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {fileName}
                </p>
              </td>
              <td align="right">
                <img
                  style={{ display: "block" }}
                  src="https://user-images.githubusercontent.com/32040951/204548869-d7cf7561-56d9-4c96-a0c1-ca14f9f9d23b.png"
                  alt="Blink logo"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </a>
      <hr />
      <a
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        title={`Télécharger le fichier "${fileName}"`}
        style={{
          textDecoration: "none",
          textDecorationColor: "#3389FF",
          padding: 8,
          display: "inline-block",
          border: "1.5px solid #f3f3f3",
          borderRadius: 12,
          width: 240,
        }}
        href="https://inablink.io/RZD6qwZ9W8HrOvr6gODq#BdqmUpeRRGSxneIq62Mu3w"
      >
        <img
          width="240"
          style={{ borderRadius: 8 }}
          src="https://user-images.githubusercontent.com/32040951/203973885-071abf8c-b09a-46eb-b57b-3fdb614b984e.jpg"
          alt="Your document preview button"
        />
        <table style={{ borderSpacing: "0", marginTop: 2 }} width="100%">
          <tbody>
            <tr>
              <td>
                <p
                  style={{
                    fontFamily:
                      "'Poppins', 'system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'",
                    margin: "0",

                    lineHeight: "100%",
                    display: "block",
                    width: 160,
                    maxWidth: 160,
                    color: "#3389FF",
                    textDecoration: "none",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontSize: ".9em",
                  }}
                >
                  {fileName}
                </p>
              </td>
              <td align="right">
                <img
                  style={{ display: "block", height: ".9em" }}
                  src="https://user-images.githubusercontent.com/32040951/204548869-d7cf7561-56d9-4c96-a0c1-ca14f9f9d23b.png"
                  alt="Blink logo"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </a>
      <hr />
      <a
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        title={`Télécharger le fichier "${fileName}"`}
        style={{
          textDecoration: "none",
          textDecorationColor: "#3389FF",
          display: "inline-block",
          background: "#fafafa",
          borderRadius: 8,
          border: "1px solid #f1f1f1",
          width: 240,
        }}
        href="https://inablink.io/RZD6qwZ9W8HrOvr6gODq#BdqmUpeRRGSxneIq62Mu3w"
      >
        <img
          width="240"
          style={{ borderRadius: "8px 8px 0px 0px", fontSize: 0 }}
          src="https://user-images.githubusercontent.com/32040951/203973885-071abf8c-b09a-46eb-b57b-3fdb614b984e.jpg"
          alt="Your document preview button"
        />
        <div style={{ padding: 8, marginTop: -4 }}>
          <p
            style={{
              fontFamily:
                "'Poppins', 'system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'",
              margin: "0",

              lineHeight: "100%",
              display: "block",
              width: 200,
              maxWidth: 200,
              color: "#3389FF",
              textDecoration: "none",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              fontSize: ".9em",
              marginBottom: 2,
            }}
          >
            {fileName}
          </p>

          <img
            style={{ display: "block", height: ".9em" }}
            src="https://user-images.githubusercontent.com/32040951/204548869-d7cf7561-56d9-4c96-a0c1-ca14f9f9d23b.png"
            alt="Blink logo"
          />
        </div>
      </a>
    </div>
  );
}
