import Image from "next/image";
import { albums, videos, experimentalMusic } from "@/data/data";
import { useState } from "react";

export default function Music() {
  return (
    <>
      <section
        id="music"
        style={{ background: "var(--color-sand)", padding: "80px 40px" }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#5a6e52",
          }}
        >
          Music
        </span>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "40px",
            fontWeight: 300,
            color: "var(--color-text-dark)",
            marginTop: "12px",
            marginBottom: "48px",
          }}
        >
          Live & Discography
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3
              style={{
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#5a6e52",
                marginBottom: "16px",
              }}
            >
              Live performances
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {videos.map((video) => (
                <figure key={video.title}>
                  {video.type === "lrt" ? (
                    <a
                      href={video.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={video.thumbnail!}
                        alt={video.title}
                        width={640}
                        height={360}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </a>
                  ) : (
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: 0,
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        src={video.embedUrl}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                        allowFullScreen
                      />
                    </div>
                  )}
                </figure>
              ))}
            </div>
          </div>
          <div>
            <h3
              style={{
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#5a6e52",
                marginBottom: "16px",
              }}
            >
              Discography
            </h3>

            {albums.map((album) => (
              <a
                key={album.title}
                href={album.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  textDecoration: "none",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "18px",
                      fontWeight: 300,
                      color: "var(--color-text-dark)",
                    }}
                  >
                    {album.title}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 300,
                      color: "var(--color-text-muted)",
                      marginTop: "2px",
                    }}
                  >
                    {album.artist}
                  </div>
                </div>
                <span
                  style={{ fontSize: "11px", color: "var(--color-text-muted)" }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section
        style={{ background: "var(--color-dark)", padding: "80px 40px" }}
      >
        <h2
          style={{
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-green-muted)",
            textAlign: "center",
          }}
        >
          Experimental Music
        </h2>
        <ul style={{ maxWidth: "700px", margin: "0 auto" }}>
          {experimentalMusic.map((track) => (
            <li key={track.title}>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "#F2EFE8",
                }}
              >
                {track.title}
              </h3>
              {track.type === "playlist" ? (
                <iframe src={track.musicLink} width="100%" height="350" />
              ) : (
                <iframe src={track.musicLink} width="100%" height="166" />
              )}

              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-green-muted)",
                  marginTop: "8px",
                }}
              >
                {track.description}
              </p>
              <a
                href={track.behanceLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "var(--color-text-muted)",
                  marginTop: "6px",
                }}
              >
                {" "}
                View on Behance
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
