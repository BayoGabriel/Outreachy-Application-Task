"use client"

export default function EffectsTab({ settings, updateSettings }) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="pattern" className="block text-sm font-medium mb-2">
          Pattern Overlay
        </label>
        <select
          id="pattern"
          value={settings.pattern}
          onChange={(e) => updateSettings("pattern", e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="none">None</option>
          <option value="dots">Dots</option>
          <option value="lines">Lines</option>
          <option value="grid">Grid</option>
          <option value="waves">Waves</option>
        </select>
      </div>

      {settings.pattern !== "none" && (
        <div>
          <label htmlFor="patternOpacity" className="block text-sm font-medium mb-2">
            Pattern Opacity ({settings.patternOpacity}%)
          </label>
          <input
            id="patternOpacity"
            type="range"
            min="0"
            max="100"
            step="5"
            value={settings.patternOpacity}
            onChange={(e) => updateSettings("patternOpacity", Number.parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      )}

      <div>
        <label htmlFor="shadow" className="block text-sm font-medium mb-2">
          Shadow
        </label>
        <select
          id="shadow"
          value={settings.shadow}
          onChange={(e) => updateSettings("shadow", e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="none">None</option>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div>
        <label htmlFor="animation" className="block text-sm font-medium mb-2">
          Title Animation
        </label>
        <select
          id="animation"
          value={settings.animation}
          onChange={(e) => updateSettings("animation", e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="none">None</option>
          <option value="animate-fadein">Fade In</option>
          <option value="animate-slidein">Slide In</option>
          <option value="animate-pulse">Pulse</option>
        </select>
      </div>

      <div>
        <label htmlFor="textAnimation" className="block text-sm font-medium mb-2">
          Text Animation
        </label>
        <select
          id="textAnimation"
          value={settings.textAnimation}
          onChange={(e) => updateSettings("textAnimation", e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="none">None</option>
          <option value="animate-fadein">Fade In</option>
          <option value="animate-slidein">Slide In</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor="hoverEffect" className="text-sm font-medium">
          Hover Effect
        </label>
        <input
          id="hoverEffect"
          type="checkbox"
          checked={settings.hoverEffect}
          onChange={(e) => updateSettings("hoverEffect", e.target.checked)}
          className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor="responsive" className="text-sm font-medium">
          Responsive Layout
        </label>
        <input
          id="responsive"
          type="checkbox"
          checked={settings.responsive}
          onChange={(e) => updateSettings("responsive", e.target.checked)}
          className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </div>
    </div>
  )
}

