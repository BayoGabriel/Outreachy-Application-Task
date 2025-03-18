"use client"

export default function ContentTab({ settings, updateSettings }) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={settings.title}
          onChange={(e) => updateSettings("title", e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={settings.content}
          onChange={(e) => updateSettings("content", e.target.value)}
          rows="4"
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="alignment" className="block text-sm font-medium mb-2">
          Text Alignment
        </label>
        <select
          id="alignment"
          value={settings.alignment}
          onChange={(e) => updateSettings("alignment", e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="showCta" className="text-sm font-medium">
            Call to Action Button
          </label>
          <input
            id="showCta"
            type="checkbox"
            checked={settings.showCta}
            onChange={(e) => updateSettings("showCta", e.target.checked)}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        {settings.showCta && (
          <div className="space-y-4 pl-4 border-l-2 border-gray-200">
            <div>
              <label htmlFor="ctaText" className="block text-sm font-medium mb-2">
                Button Text
              </label>
              <input
                id="ctaText"
                type="text"
                value={settings.ctaText}
                onChange={(e) => updateSettings("ctaText", e.target.value)}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="ctaUrl" className="block text-sm font-medium mb-2">
                Button URL
              </label>
              <input
                id="ctaUrl"
                type="text"
                value={settings.ctaUrl}
                onChange={(e) => updateSettings("ctaUrl", e.target.value)}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="buttonStyle" className="block text-sm font-medium mb-2">
                Button Style
              </label>
              <select
                id="buttonStyle"
                value={settings.buttonStyle}
                onChange={(e) => updateSettings("buttonStyle", e.target.value)}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="solid">Solid</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="buttonColor" className="block text-sm font-medium mb-2">
                  Button Color
                </label>
                <input
                  id="buttonColor"
                  type="color"
                  value={settings.buttonColor}
                  onChange={(e) => updateSettings("buttonColor", e.target.value)}
                  className="w-full h-10 rounded border border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="buttonTextColor" className="block text-sm font-medium mb-2">
                  Button Text Color
                </label>
                <input
                  id="buttonTextColor"
                  type="color"
                  value={settings.buttonTextColor}
                  onChange={(e) => updateSettings("buttonTextColor", e.target.value)}
                  className="w-full h-10 rounded border border-gray-300"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

