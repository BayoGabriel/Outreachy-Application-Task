"use client"

export default function StyleTab({ settings, updateSettings }) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        updateSettings("imageUrl", reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBgImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        updateSettings("bgImage", reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="block text-sm font-medium mb-2">Background Type</p>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="bgType"
              value="color"
              checked={settings.bgType === "color"}
              onChange={(e) => updateSettings("bgType", e.target.value)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            Solid Color
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="bgType"
              value="gradient"
              checked={settings.bgType === "gradient"}
              onChange={(e) => updateSettings("bgType", e.target.value)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            Gradient
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="bgType"
              value="image"
              checked={settings.bgType === "image"}
              onChange={(e) => updateSettings("bgType", e.target.value)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            Image
          </label>
        </div>
      </div>

      {settings.bgType === "color" && (
        <div>
          <label htmlFor="bgColor" className="block text-sm font-medium mb-2">
            Background Color
          </label>
          <input
            id="bgColor"
            type="color"
            value={settings.bgColor}
            onChange={(e) => updateSettings("bgColor", e.target.value)}
            className="w-full h-10 rounded border border-gray-300"
          />
        </div>
      )}

      {settings.bgType === "gradient" && (
        <div className="space-y-4">
          <div>
            <label htmlFor="gradientStart" className="block text-sm font-medium mb-2">
              Gradient Start Color
            </label>
            <input
              id="gradientStart"
              type="color"
              value={settings.gradientStart}
              onChange={(e) => updateSettings("gradientStart", e.target.value)}
              className="w-full h-10 rounded border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="gradientEnd" className="block text-sm font-medium mb-2">
              Gradient End Color
            </label>
            <input
              id="gradientEnd"
              type="color"
              value={settings.gradientEnd}
              onChange={(e) => updateSettings("gradientEnd", e.target.value)}
              className="w-full h-10 rounded border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="gradientDirection" className="block text-sm font-medium mb-2">
              Gradient Direction
            </label>
            <select
              id="gradientDirection"
              value={settings.gradientDirection}
              onChange={(e) => updateSettings("gradientDirection", e.target.value)}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="to right">Left to Right</option>
              <option value="to bottom">Top to Bottom</option>
              <option value="45deg">Diagonal</option>
            </select>
          </div>
        </div>
      )}

      {settings.bgType === "image" && (
        <div className="space-y-4">
          <div>
            <label htmlFor="bgImage" className="block text-sm font-medium mb-2">
              Background Image
            </label>
            <div className="mt-2 space-y-4">
              <input
                id="bgImage"
                type="file"
                accept="image/*"
                onChange={handleBgImageUpload}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {settings.bgImage && (
                <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={settings.bgImage || "/placeholder.svg"}
                    alt="Background preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="bgOpacity" className="block text-sm font-medium mb-2">
              Background Opacity ({settings.bgOpacity}%)
            </label>
            <input
              id="bgOpacity"
              type="range"
              min="0"
              max="100"
              step="5"
              value={settings.bgOpacity}
              onChange={(e) => updateSettings("bgOpacity", Number.parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="textColor" className="block text-sm font-medium mb-2">
          Text Color
        </label>
        <input
          id="textColor"
          type="color"
          value={settings.textColor}
          onChange={(e) => updateSettings("textColor", e.target.value)}
          className="w-full h-10 rounded border border-gray-300"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="showImage" className="text-sm font-medium">
            Banner Image
          </label>
          <input
            id="showImage"
            type="checkbox"
            checked={settings.showImage}
            onChange={(e) => updateSettings("showImage", e.target.checked)}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>

        {settings.showImage && (
          <div className="space-y-4 pl-4 border-l-2 border-gray-200">
            <div>
              <label htmlFor="imageUpload" className="block text-sm font-medium mb-2">
                Upload Image
              </label>
              <div className="mt-2 space-y-4">
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {settings.imageUrl && (
                  <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={settings.imageUrl || "/placeholder.svg"}
                      alt="Image preview"
                      className="w-full h-full object-cover"
                      style={{
                        borderRadius:
                          settings.imageStyle === "circle" ? "50%" : settings.imageStyle === "rounded" ? "8px" : "0",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="imagePosition" className="block text-sm font-medium mb-2">
                Image Position
              </label>
              <select
                id="imagePosition"
                value={settings.imagePosition}
                onChange={(e) => updateSettings("imagePosition", e.target.value)}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>
            <div>
              <label htmlFor="imageStyle" className="block text-sm font-medium mb-2">
                Image Style
              </label>
              <select
                id="imageStyle"
                value={settings.imageStyle}
                onChange={(e) => updateSettings("imageStyle", e.target.value)}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="circle">Circle</option>
                <option value="square">Square</option>
                <option value="rounded">Rounded</option>
              </select>
            </div>
            <div>
              <label htmlFor="imageSize" className="block text-sm font-medium mb-2">
                Image Size ({settings.imageSize}px)
              </label>
              <input
                id="imageSize"
                type="range"
                min="60"
                max="200"
                step="10"
                value={settings.imageSize}
                onChange={(e) => updateSettings("imageSize", Number.parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

