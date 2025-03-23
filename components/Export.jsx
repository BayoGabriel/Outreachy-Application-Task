"use client"

import { useState } from "react"

export default function ExportTab({ settings }) {
  const [copied, setCopied] = useState(false)

  const generateMediaWikiCode = () => {
    return `<div class="banner-wrapper"
  style="
    ${settings.width === "contained" ? "max-width: 1200px; margin: 0 auto;" : ""}
    margin-bottom: ${settings.margin}px;
  ">
  <div class="custom-banner"
    style="
      ${
        settings.bgType === "gradient"
          ? `background: linear-gradient(${settings.gradientDirection}, ${settings.gradientStart}, ${settings.gradientEnd});`
          : settings.bgType === "image"
            ? `background-image: url(${settings.bgImage}); background-size: cover; background-position: center;`
            : `background-color: ${settings.bgColor};`
      }
      color: ${settings.textColor};
      padding: ${settings.padding}px;
      border-radius: ${settings.borderRadius}px;
      ${settings.showBorder ? `border: ${settings.borderWidth}px ${settings.borderStyle} ${settings.borderColor};` : ""}
      position: relative;
      overflow: hidden;
    ">
    
    <div class="banner-content" style="
      position: relative;
      z-index: 1;
      text-align: ${settings.alignment};
      ${settings.animation !== "none" ? `animation: ${settings.animation} 1s ease-out;` : ""}
    ">
      <h2 style="
        font-size: ${settings.titleSize}px;
        margin-bottom: 15px;
      ">${settings.title}</h2>
      
      <p style="
        font-size: ${settings.textSize}px;
        margin-bottom: ${settings.showCta ? "20px" : "0"};
      ">${settings.content}</p>
      
      ${
        settings.showCta
          ? `<a href="${settings.ctaUrl}" 
        style="
          display: inline-block;
          padding: 10px 20px;
          background: ${settings.buttonColor};
          color: ${settings.buttonTextColor};
          text-decoration: none;
          border-radius: 4px;
          ${settings.buttonStyle === "outline" ? `border: 2px solid ${settings.buttonColor}; background: transparent;` : ""}
          ${settings.buttonStyle === "ghost" ? "background: transparent;" : ""}
        ">${settings.ctaText}</a>`
          : ""
      }
      ${
        settings.showAdditionalImages
          ? settings.additionalImages
              .map((image, index) => {
                if (!image.url) return ""
                return `
        <img 
          src="${image.url}" 
          style="
            position: absolute;
            ${image.positionX === "left" ? "left: 20px;" : image.positionX === "right" ? "right: 20px;" : "left: 50%; transform: translateX(-50%);"}
            ${image.positionY === "top" ? "top: 20px;" : image.positionY === "bottom" ? "bottom: 20px;" : "top: 50%; transform: translateY(-50%);"}
            ${
              image.positionX === "center" && image.positionY === "middle"
                ? "transform: translate(-50%, -50%);"
                : image.positionX === "center"
                  ? "transform: translateX(-50%);"
                  : image.positionY === "middle"
                    ? "transform: translateY(-50%);"
                    : ""
            }
            width: ${image.width}px;
            border-radius: ${image.borderRadius}px;
            z-index: ${image.zIndex};
            ${image.shadow ? "box-shadow: 0 4px 8px rgba(0,0,0,0.2);" : ""}
          "
        />`
              })
              .join("")
          : ""
      }
    </div>
    
    ${
      settings.showImage
        ? `<img 
      src="${settings.imageUrl}" 
      style="
        position: absolute;
        ${settings.imagePosition}: 20px;
        top: 50%;
        transform: translateY(-50%);
        width: ${settings.imageSize}px;
        height: ${settings.imageSize}px;
        object-fit: cover;
        border-radius: ${settings.imageStyle === "circle" ? "50%" : settings.imageStyle === "rounded" ? "8px" : "0"};
      "
    />`
        : ""
    }
  </div>
</div>`
  }

  const copyCode = () => {
    navigator.clipboard.writeText(generateMediaWikiCode())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">MediaWiki Code</h3>
        <p className="text-sm text-gray-600 mb-4">
          Copy this code and paste it into your MediaWiki page to display the banner.
        </p>
        <div className="relative">
          <pre className="p-4 bg-gray-100 rounded-lg overflow-x-auto text-sm">
            <code>{generateMediaWikiCode()}</code>
          </pre>
          <button
            className="absolute top-2 right-2 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={copyCode}
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </div>

      <div className="flex items-center p-4 rounded-lg bg-blue-50 text-blue-800 border border-blue-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 flex-shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm">
          Note: Some MediaWiki installations may have restrictions on certain HTML attributes or styles. Test the banner
          in your wiki's sandbox first.
        </p>
      </div>
    </div>
  )
}

