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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="78"
                  height="16"
                  fill="none"
                  style={{ display: "block" }}
                >
                  <path
                    fill="#A4A4A4"
                    d="M1.417 4.104a1.13 1.13 0 0 1-.832-.336 1.13 1.13 0 0 1-.336-.832c0-.33.112-.608.336-.832a1.13 1.13 0 0 1 .832-.336c.32 0 .592.112.816.336.224.224.336.501.336.832 0 .33-.112.608-.336.832a1.11 1.11 0 0 1-.816.336Zm.896 1.168v8.816H.489V5.272h1.824ZM8.836 5.128c.693 0 1.312.144 1.855.432a3.06 3.06 0 0 1 1.296 1.28c.31.565.464 1.248.464 2.048v5.2h-1.808V9.16c0-.79-.197-1.392-.591-1.808-.395-.427-.934-.64-1.616-.64-.683 0-1.227.213-1.632.64-.395.416-.592 1.019-.592 1.808v4.928H4.388V5.272h1.824V6.28a3.032 3.032 0 0 1 1.136-.848c.469-.203.965-.304 1.488-.304ZM13.85 9.64c0-.885.181-1.67.544-2.352a4.062 4.062 0 0 1 3.616-2.16c.693 0 1.296.139 1.808.416.523.267.939.603 1.248 1.008v-1.28h1.84v8.816h-1.84v-1.312c-.31.416-.73.763-1.264 1.04-.533.277-1.141.416-1.824.416-.757 0-1.45-.192-2.08-.576a4.275 4.275 0 0 1-1.504-1.632c-.363-.704-.544-1.499-.544-2.384Zm7.216.032c0-.608-.128-1.136-.384-1.584a2.585 2.585 0 0 0-.976-1.024 2.575 2.575 0 0 0-1.312-.352c-.47 0-.906.117-1.312.352-.405.224-.736.56-.992 1.008-.245.437-.368.96-.368 1.568 0 .608.123 1.141.368 1.6.256.459.587.81.992 1.056.416.235.854.352 1.312.352.47 0 .907-.117 1.312-.352s.73-.576.976-1.024c.256-.459.384-.992.384-1.6ZM26.806 6.584c.31-.427.73-.773 1.264-1.04a3.922 3.922 0 0 1 1.808-.416 4.06 4.06 0 0 1 2.112.56c.63.373 1.125.907 1.488 1.6.363.683.544 1.467.544 2.352 0 .885-.181 1.68-.544 2.384a4.117 4.117 0 0 1-1.504 1.632 3.945 3.945 0 0 1-2.096.576c-.683 0-1.29-.133-1.824-.4-.523-.267-.939-.608-1.248-1.024v1.28h-1.824V2.248h1.824v4.336Zm5.36 3.056c0-.608-.128-1.13-.384-1.568a2.443 2.443 0 0 0-.992-1.008 2.574 2.574 0 0 0-1.312-.352c-.459 0-.896.117-1.312.352a2.696 2.696 0 0 0-.992 1.024c-.245.448-.368.976-.368 1.584 0 .608.123 1.141.368 1.6.256.448.587.79.992 1.024.416.235.853.352 1.312.352.47 0 .907-.117 1.312-.352.416-.245.747-.597.992-1.056.256-.459.384-.992.384-1.6ZM37.33 2.248v11.84h-1.824V2.248h1.824ZM40.332 4.104a1.13 1.13 0 0 1-.832-.336 1.13 1.13 0 0 1-.336-.832c0-.33.112-.608.336-.832a1.13 1.13 0 0 1 .832-.336c.32 0 .592.112.816.336.224.224.336.501.336.832 0 .33-.112.608-.336.832a1.11 1.11 0 0 1-.816.336Zm.896 1.168v8.816h-1.824V5.272h1.824ZM47.751 5.128c.694 0 1.312.144 1.856.432.555.288.987.715 1.296 1.28.31.565.464 1.248.464 2.048v5.2H49.56V9.16c0-.79-.197-1.392-.592-1.808-.395-.427-.933-.64-1.616-.64-.682 0-1.227.213-1.632.64-.395.416-.592 1.019-.592 1.808v4.928h-1.824V5.272h1.824V6.28a3.032 3.032 0 0 1 1.136-.848c.47-.203.965-.304 1.488-.304ZM56.862 9.688l4.064 4.4h-2.464l-3.264-3.792v3.792h-1.824V2.248h1.824v6.88l3.2-3.856h2.528l-4.064 4.416ZM62.65 14.2a1.13 1.13 0 0 1-.833-.336 1.13 1.13 0 0 1-.336-.832c0-.33.112-.608.336-.832a1.13 1.13 0 0 1 .832-.336c.32 0 .592.112.816.336.224.224.336.501.336.832 0 .33-.112.608-.336.832a1.11 1.11 0 0 1-.816.336ZM66.38 4.104a1.13 1.13 0 0 1-.831-.336 1.13 1.13 0 0 1-.337-.832c0-.33.112-.608.337-.832a1.13 1.13 0 0 1 .831-.336c.32 0 .593.112.817.336.224.224.335.501.335.832 0 .33-.111.608-.335.832a1.11 1.11 0 0 1-.817.336Zm.897 1.168v8.816h-1.825V5.272h1.825ZM73.175 14.232c-.832 0-1.584-.187-2.256-.56a4.151 4.151 0 0 1-1.584-1.6c-.384-.693-.576-1.493-.576-2.4 0-.896.198-1.69.592-2.384a4.088 4.088 0 0 1 1.616-1.6c.683-.373 1.446-.56 2.288-.56.843 0 1.606.187 2.288.56a4.09 4.09 0 0 1 1.616 1.6c.395.693.592 1.488.592 2.384 0 .896-.202 1.69-.608 2.384a4.252 4.252 0 0 1-1.664 1.616 4.781 4.781 0 0 1-2.304.56Zm0-1.584c.47 0 .907-.112 1.312-.336.416-.224.752-.56 1.008-1.008.256-.448.384-.992.384-1.632 0-.64-.122-1.179-.368-1.616a2.473 2.473 0 0 0-.976-1.008 2.67 2.67 0 0 0-1.312-.336c-.47 0-.906.112-1.312.336-.394.224-.709.56-.944 1.008-.234.437-.352.976-.352 1.616 0 .95.24 1.685.72 2.208.49.512 1.104.768 1.84.768Z"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </a>
    </div>
  );
}
