"use client"

import { useState } from "react"
import BannerPreview from "@/components/Banner"
import ContentTab from "@/components/Content"
import StyleTab from "@/components/Style"
import LayoutTab from "@/components/Layout"
import EffectsTab from "@/components/Effects"
import ExportTab from "@/components/Export"

const animationStyles = `
@keyframes animate-fadein {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes animate-slidein {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes animate-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.animate-fadein {
  animation: animate-fadein 1s;
}

.animate-slidein {
  animation: animate-slidein 1s;
}

.animate-pulse {
  animation: animate-pulse 2s infinite;
}
`

const defaultSettings = {
  title: "Welcome to Our Wiki",
  content: "Discover our collection of knowledge and contribute to our growing community.",
  alignment: "left",
  bgType: "color",
  bgColor: "#3366cc",
  gradientStart: "#3366cc",
  gradientEnd: "#1a4ba3",
  gradientDirection: "to right",
  bgImage: "",
  bgOpacity: 100,
  textColor: "#ffffff",
  showImage: false,
  imageUrl: "",
  imagePosition: "right",
  imageStyle: "circle",
  imageSize: 120,
  showCta: false,
  ctaText: "Learn More",
  ctaUrl: "#",
  buttonColor: "#ffffff",
  buttonTextColor: "#3366cc",
  buttonStyle: "solid",
  width: "full",
  padding: 40,
  margin: 0,
  borderRadius: 8,
  titleSize: 32,
  textSize: 18,
  showBorder: false,
  borderColor: "#ffffff",
  borderWidth: 2,
  borderStyle: "solid",
  overlayOpacity: 0,
  overlayColor: "#000000",
  pattern: "none",
  patternOpacity: 20,
  shadow: "none",
  animation: "none",
  textAnimation: "none",
  hoverEffect: false,
  responsive: true,
}

export default function BannerCustomizer() {
  const [settings, setSettings] = useState(defaultSettings)
  const [activeTab, setActiveTab] = useState("content")

  const updateSettings = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-8">
      <style>{animationStyles}</style>
      <BannerPreview settings={settings} />

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="border-b mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "content", label: "Content" },
              { id: "style", label: "Style" },
              { id: "layout", label: "Layout" },
              { id: "effects", label: "Effects" },
              { id: "export", label: "Export" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 -mb-px ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-500 font-medium text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "content" && <ContentTab settings={settings} updateSettings={updateSettings} />}
        {activeTab === "style" && <StyleTab settings={settings} updateSettings={updateSettings} />}
        {activeTab === "layout" && <LayoutTab settings={settings} updateSettings={updateSettings} />}
        {activeTab === "effects" && <EffectsTab settings={settings} updateSettings={updateSettings} />}
        {activeTab === "export" && <ExportTab settings={settings} />}

        <div className="mt-6">
          <button
            onClick={() => setSettings(defaultSettings)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
          >
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  )
}

