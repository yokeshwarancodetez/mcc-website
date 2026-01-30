'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface Branch {
  name: string
  lat: number
  lng: number
  address?: string
}

const branches: Branch[] = [
  { name: 'Andalas', lat: 3.1547, lng: 101.6964, address: 'Andalas, Kuala Lumpur' },
  { name: 'Batu Caves', lat: 3.2474, lng: 101.57, address: 'Batu Caves, Selangor' },
  { name: 'Brickfields', lat: 3.1389, lng: 101.6919, address: 'Brickfields, Kuala Lumpur' },
  { name: 'Cheras', lat: 3.0737, lng: 101.7265, address: 'Cheras, Kuala Lumpur' },
  { name: 'Damansara', lat: 3.1667, lng: 101.65, address: 'Damansara, Kuala Lumpur' },
  { name: 'Jalan Kelang Lama', lat: 3.0968, lng: 101.6635, address: 'Jalan Kelang Lama, Kuala Lumpur' },
  { name: 'Klang', lat: 3.0319, lng: 101.5624, address: 'Klang, Selangor' },
  { name: 'Mt. Kiara', lat: 3.1839, lng: 101.6241, address: 'Mt. Kiara, Kuala Lumpur' },
  { name: 'Penang', lat: 5.3521, lng: 100.333, address: 'Penang' },
  { name: 'PJ North', lat: 3.1897, lng: 101.6013, address: 'PJ North, Selangor' },
  { name: 'Pudu', lat: 3.1458, lng: 101.7081, address: 'Pudu, Kuala Lumpur' },
  { name: 'Sentul', lat: 3.2286, lng: 101.7089, address: 'Sentul, Kuala Lumpur' },
  { name: 'Seremban', lat: 2.7258, lng: 101.9424, address: 'Seremban, Negeri Sembilan' },
  { name: 'Taman Yarl', lat: 3.1333, lng: 101.55, address: 'Taman Yarl, Selangor' },
  { name: 'Subang Jaya', lat: 3.0573, lng: 101.5701, address: 'Subang Jaya, Selangor' },
]

export default function BranchesMap() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [mapInstance, setMapInstance] = useState<any>(null)

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'
    script.async = true
    script.onload = initMap
    document.body.appendChild(script)

    return () => {
      document.head.removeChild(link)
      document.body.removeChild(script)
    }
  }, [])

  const initMap = () => {
    const L = (window as any).L
    if (!L) return

    const map = L.map('branchesMap').setView([3.5, 101.7], 8)
    setMapInstance(map)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map)

    const featureGroup = L.featureGroup()

    const dotIcon = L.divIcon({
      html: `<div style="width:14px;height:14px;background:#CE0000;border-radius:50%;border:2px solid white;"></div>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      popupAnchor: [0, -8],
    })

    branches.forEach((branch) => {
      const marker = L.marker([branch.lat, branch.lng], { icon: dotIcon })

      marker.bindPopup(`
        <div style="min-width:140px">
          <strong style="color:#CE0000">${branch.name}</strong><br/>
          <small>${branch.address}</small>
        </div>
      `)

      // ✅ FIXED — NO `this`
      marker.on('click', () => {
        setSelectedBranch(branch)
        setIsDropdownOpen(false)
        marker.openPopup()
        map.setView([branch.lat, branch.lng], 14)
      })

      featureGroup.addLayer(marker)
    })

    featureGroup.addTo(map)
    map.fitBounds(featureGroup.getBounds().pad(0.1))
  }

  const handleBranchSelect = (branch: Branch) => {
    setSelectedBranch(branch)
    setIsDropdownOpen(false)

    if (!mapInstance) return

    mapInstance.setView([branch.lat, branch.lng], 14)

    Object.values(mapInstance._layers).forEach((layer: any) => {
      if (
        layer.getLatLng &&
        layer.getLatLng().lat === branch.lat &&
        layer.getLatLng().lng === branch.lng
      ) {
        layer.openPopup()
      }
    })
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
        
<div
  id="branchesMap"
  className="h-[520px] rounded-lg border-2 border-[#CE0000] shadow-lg relative z-0"
/>

        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex justify-between items-center px-4 py-3 border-2 border-[#003087] rounded-lg bg-white"
          >
            <span className="font-bold text-[#003087]">
              {selectedBranch ? selectedBranch.name : 'Select a Branch'}
            </span>
            <ChevronDown className={`transition ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className="mt-2 border rounded-lg shadow bg-white max-h-80 overflow-y-auto">
              {branches.map((branch) => (
                <button
                  key={branch.name}
                  onClick={() => handleBranchSelect(branch)}
                  className="w-full px-4 py-3 text-left hover:bg-[#CE0000]/10"
                >
                  <strong>{branch.name}</strong>
                  <div className="text-xs text-gray-500">{branch.address}</div>
                </button>
              ))}
            </div>
          )}

         {selectedBranch && (
  <div className="mt-6 p-6 rounded-lg bg-gradient-to-br from-[#003087] to-[#CE0000] text-white shadow-lg">
    <h3 className="text-xl font-bold mb-2">{selectedBranch.name}</h3>
    <p className="text-sm text-white/90 mb-6">
      {selectedBranch.address}
    </p>

    <button
      onClick={() => setSelectedBranch(null)}
      className="w-full px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 font-bold transition"
    >
      Clear Selection
    </button>
  </div>
)}

        </div>
      </div>
    </section>
  )
}
