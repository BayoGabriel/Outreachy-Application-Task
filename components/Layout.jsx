"use client"

export default function LayoutTab({ settings, updateSettings }) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="width" className="block text-sm font-medium mb-2">
          Banner Width
        </label>
        <select
          id="width"
          value={settings.width}
          onChange={(e) => updateSettings("width", e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="full">Full Width</option>
          <option value="contained">Contained</option>
        </select>
      </div>

      <div>
        <label htmlFor="padding" className="block text-sm font-medium mb-2">
          Padding ({settings.padding}px)
        </label>
        <input
          id="padding"
          type="range"
          min="10"
          max="80"
          step="5"
          value={settings.padding}
          onChange={(e) => updateSettings("padding", Number.parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label htmlFor="margin" className="block text-sm font-medium mb-2">
          Bottom Margin ({settings.margin}px)
        </label>
        <input
          id="margin"
          type="range"
          min="0"
          max="100"
          step="5"
          value={settings.margin}
          onChange={(e) => updateSettings("margin", Number.parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label htmlFor="borderRadius" className="block text-sm font-medium mb-2">
          Border Radius ({settings.borderRadius}px)
        </label>
        <input
          id="borderRadius"
          type="range"
          min="0"
          max="20"
          step="1"
          value={settings.borderRadius}
          onChange={(e) => updateSettings("borderRadius", Number.parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label htmlFor="titleSize" className="block text-sm font-medium mb-2">
          Title Size ({settings.titleSize}px)
        </label>
        <input
          id="titleSize"
          type="range"
          min="18"
          max="48"
          step="1"
          value={settings.titleSize}
          onChange={(e) => updateSettings("titleSize", Number.parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label htmlFor="textSize" className="block text-sm font-medium mb-2">
          Text Size ({settings.textSize}px)
        </label>
        <input
          id="textSize"
          type="range"
          min="12"
          max="24"
          step="1"
          value={settings.textSize}
          onChange={(e) => updateSettings("textSize", Number.parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="showBorder" className="text-sm font-medium">
            Border
          </label>
          <input
            id="showBorder"
            type="checkbox"
            checked={settings.showBorder}
            onChange={(e) => updateSettings("showBorder", e.target.checked)}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        {settings.showBorder && (
          <div className="space-y-4 pl-4 border-l-2 border-gray-200">
            <div>
              <label htmlFor="borderColor" className="block text-sm font-medium mb-2">
                Border Color
              </label>
              <input
                id="borderColor"
                type="color"
                value={settings.borderColor}
                onChange={(e) => updateSettings("borderColor", e.target.value)}
                className="w-full h-10 rounded border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="borderWidth" className="block text-sm font-medium mb-2">
                Border Width ({settings.borderWidth}px)
              </label>
              <input
                id="borderWidth"
                type="range"
                min="1"
                max="10"
                step="1"
                value={settings.borderWidth}
                onChange={(e) => updateSettings("borderWidth", Number.parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="borderStyle" className="block text-sm font-medium mb-2">
                Border Style
              </label>
              <select
                id="borderStyle"
                value={settings.borderStyle}
                onChange={(e) => updateSettings("borderStyle", e.target.value)}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

