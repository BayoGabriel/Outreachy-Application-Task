export default function BannerPreview({ settings }) {
  const getBackgroundStyle = () => {
    switch (settings.bgType) {
      case "gradient":
        return {
          background: `linear-gradient(${settings.gradientDirection}, ${settings.gradientStart}, ${settings.gradientEnd})`,
        }
      case "image":
        return {
          backgroundImage: `url(${settings.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: settings.bgOpacity / 100,
        }
      default:
        return {
          backgroundColor: settings.bgColor,
        }
    }
  }

  const getPatternStyle = () => {
    if (settings.pattern === "none") return {}

    const patterns = {
      dots: `radial-gradient(currentColor 1px, transparent 1px)`,
      lines: `repeating-linear-gradient(45deg, currentColor, currentColor 1px, transparent 1px, transparent 10px)`,
      grid: `linear-gradient(currentColor 1px, transparent 1px), 
            linear-gradient(to right, currentColor 1px, transparent 1px)`,
      waves: `repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 10px, currentColor 10px, currentColor 11px)`,
    }

    return {
      backgroundImage: patterns[settings.pattern],
      backgroundSize: "20px 20px",
      opacity: settings.patternOpacity / 100,
    }
  }

  const shadowStyles = {
    none: "none",
    sm: "0 2px 4px rgba(0,0,0,0.1)",
    md: "0 4px 8px rgba(0,0,0,0.12)",
    lg: "0 8px 16px rgba(0,0,0,0.15)",
  }

  return (
    <div
      className="relative overflow-hidden transition-all duration-300"
      style={{
        ...getBackgroundStyle(),
        padding: `${settings.padding}px`,
        borderRadius: `${settings.borderRadius}px`,
        boxShadow: shadowStyles[settings.shadow],
        ...(settings.showBorder
          ? {
              border: `${settings.borderWidth}px ${settings.borderStyle} ${settings.borderColor}`,
            }
          : {}),
        ...(settings.width === "contained"
          ? {
              maxWidth: "1200px",
              margin: "0 auto",
            }
          : {}),
      }}
    >
      {/* Pattern Overlay */}
      {settings.pattern !== "none" && (
        <div className="absolute inset-0 pointer-events-none" style={getPatternStyle()} />
      )}

      {/* Content */}
      <div
        className={`relative z-10 ${
          settings.alignment === "center" ? "text-center" : settings.alignment === "right" ? "text-right" : "text-left"
        }`}
        style={{
          marginRight: settings.showImage && settings.imagePosition === "right" ? `${settings.imageSize + 40}px` : "0",
          marginLeft: settings.showImage && settings.imagePosition === "left" ? `${settings.imageSize + 40}px` : "0",
        }}
      >
        <h2
          className={`font-bold mb-4 ${settings.textAnimation}`}
          style={{
            color: settings.textColor,
            fontSize: `${settings.titleSize}px`,
          }}
        >
          {settings.title}
        </h2>
        <p
          className={`mb-6 ${settings.textAnimation}`}
          style={{
            color: settings.textColor,
            fontSize: `${settings.textSize}px`,
          }}
        >
          {settings.content}
        </p>
        {settings.showCta && (
          <button
            className={`px-4 py-2 rounded transition-all duration-200 ${
              settings.buttonStyle === "ghost" ? "hover:bg-opacity-10" : ""
            }`}
            style={{
              backgroundColor:
                settings.buttonStyle === "outline" || settings.buttonStyle === "ghost"
                  ? "transparent"
                  : settings.buttonColor,
              color: settings.buttonTextColor,
              border: settings.buttonStyle === "outline" ? `2px solid ${settings.buttonColor}` : "none",
            }}
          >
            {settings.ctaText}
          </button>
        )}
      </div>

      {/* Banner Image */}
      {settings.showImage && settings.imageUrl && (
        <div
          className="absolute top-1/2 -translate-y-1/2 transition-all duration-300"
          style={{
            [settings.imagePosition]: "20px",
            width: `${settings.imageSize}px`,
            height: `${settings.imageSize}px`,
          }}
        >
          <img
            src={settings.imageUrl || "/placeholder.svg"}
            alt=""
            className="object-cover w-full h-full transition-all duration-300"
            style={{
              borderRadius: settings.imageStyle === "circle" ? "50%" : settings.imageStyle === "rounded" ? "8px" : "0",
            }}
          />
        </div>
      )}

      {/* Additional Banner Images */}
      {settings.showAdditionalImages &&
        settings.additionalImages.map(
          (image, index) =>
            image.url && (
              <div
                key={index}
                className="absolute transition-all duration-300"
                style={{
                  [image.positionX === "left" ? "left" : image.positionX === "right" ? "right" : "left"]:
                    image.positionX === "center" ? "50%" : "20px",
                  [image.positionY === "top" ? "top" : image.positionY === "bottom" ? "bottom" : "top"]:
                    image.positionY === "middle" ? "50%" : "20px",
                  transform: `${image.positionX === "center" ? "translateX(-50%)" : ""} ${image.positionY === "middle" ? "translateY(-50%)" : ""}`,
                  width: `${image.width}px`,
                  zIndex: image.zIndex,
                  boxShadow: image.shadow ? "0 4px 8px rgba(0,0,0,0.2)" : "none",
                }}
              >
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={`Banner image ${index + 1}`}
                  className="object-contain w-full h-auto transition-all duration-300"
                  style={{
                    borderRadius: `${image.borderRadius}px`,
                  }}
                />
              </div>
            ),
        )}
    </div>
  )
}

