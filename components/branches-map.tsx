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
  { name: 'Batu Caves', lat: 3.2474, lng: 101.5700, address: 'Batu Caves, Selangor' },
  { name: 'Brickfields', lat: 3.1389, lng: 101.6919, address: 'Brickfields, Kuala Lumpur' },
  { name: 'Cheras', lat: 3.0737, lng: 101.7265, address: 'Cheras, Kuala Lumpur' },
  { name: 'Damansara', lat: 3.1667, lng: 101.6500, address: 'Damansara, Kuala Lumpur' },
  { name: 'Jalan Kelang Lama', lat: 3.0968, lng: 101.6635, address: 'Jalan Kelang Lama, Kuala Lumpur' },
  { name: 'Klang', lat: 3.0319, lng: 101.5624, address: 'Klang, Selangor' },
  { name: 'Mt. Kiara', lat: 3.1839, lng: 101.6241, address: 'Mt. Kiara, Kuala Lumpur' },
  { name: 'Penang', lat: 5.3521, lng: 100.3330, address: 'Penang' },
  { name: 'PJ North', lat: 3.1897, lng: 101.6013, address: 'PJ North, Selangor' },
  { name: 'Pudu', lat: 3.1458, lng: 101.7081, address: 'Pudu, Kuala Lumpur' },
  { name: 'Sentul', lat: 3.2286, lng: 101.7089, address: 'Sentul, Kuala Lumpur' },
  { name: 'Seremban', lat: 2.7258, lng: 101.9424, address: 'Seremban, Negeri Sembilan' },
  { name: 'Taman Yarl', lat: 3.1333, lng: 101.5500, address: 'Taman Yarl, Selangor' },
  { name: 'Subang Jaya', lat: 3.0573, lng: 101.5701, address: 'Subang Jaya, Selangor' },
]

export default function BranchesMap() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [mapInstance, setMapInstance] = useState<any>(null)

  useEffect(() => {
    // Load Leaflet CSS and JS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'
    script.async = true
    script.onload = () => {
      initMap()
    }
    document.body.appendChild(script)

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link)
      if (document.body.contains(script)) document.body.removeChild(script)
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

    // Create a red dot icon (Google Maps style)
    const dotIcon = L.divIcon({
      html: `<div class="w-4 h-4 bg-[#CE0000] rounded-full border-2 border-white shadow-lg"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10],
    })

    branches.forEach((branch) => {
      const marker = L.marker([branch.lat, branch.lng], {
        icon: dotIcon,
      })

      const popupContent = `
        <div class="p-3 min-w-max">
          <div class="font-bold text-sm text-[#CE0000]">${branch.name}</div>
          <div class="text-xs text-gray-600 mt-1">${branch.address}</div>
        </div>
      `

      marker.bindPopup(popupContent)
      
      marker.on('click', function () {
        setSelectedBranch(branch)
        setIsDropdownOpen(false)
        this.openPopup()
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
    
    if (mapInstance) {
      mapInstance.setView([branch.lat, branch.lng], 14)
      // Trigger marker click
      const markers = mapInstance._layers
      for (const key in markers) {
        const layer = markers[key]
        if (layer.getLatLng && layer.getLatLng().lat === branch.lat && layer.getLatLng().lng === branch.lng) {
          layer.openPopup()
          break
        }
      }
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] mb-2">Our Branch Locations</h2>
          <p className="text-gray-600">Explore all Malaysian Ceylonese Congress branches across the country. Select a branch to view details.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="flex flex-col relative z-10">
            <div
              id="branchesMap"
              className="w-full rounded-lg shadow-lg border-2 border-[#CE0000] flex-1"
              style={{ minHeight: '500px', position: 'relative', zIndex: 10 }}
            />
          </div>

          {/* Dropdown and Details */}
          <div className="flex flex-col relative z-20">
            <div className="relative mb-4 z-30">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 bg-white border-2 border-[#003087] rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors relative z-30"
              >
                <span className="font-bold text-[#003087] text-left">
                  {selectedBranch ? selectedBranch.name : 'Select a Branch'}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-[#CE0000] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#003087] rounded-lg shadow-2xl max-h-80 overflow-y-auto" style={{ zIndex: 9999 }}>
                  {branches.map((branch) => (
                    <button
                      key={branch.name}
                      onClick={() => handleBranchSelect(branch)}
                      className={`w-full text-left px-4 py-3 border-b border-gray-200 transition-all hover:bg-[#CE0000]/10 ${
                        selectedBranch?.name === branch.name
                          ? 'bg-[#CE0000] text-white hover:bg-[#CE0000]'
                          : 'text-[#003087] hover:text-[#CE0000]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${selectedBranch?.name === branch.name ? 'bg-white' : 'bg-[#CE0000]'}`} />
                        <div>
                          <p className="font-bold text-sm">{branch.name}</p>
                          <p className="text-xs opacity-75">{branch.address}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Branch Details Card */}
            {selectedBranch && (
              <div className="flex-1 p-6 bg-gradient-to-br from-[#003087] to-[#CE0000] text-white rounded-lg shadow-lg flex flex-col relative z-20">
                <h3 className="text-2xl font-bold mb-3">{selectedBranch.name}</h3>
                <p className="text-base text-gray-100 mb-4 flex-1">{selectedBranch.address}</p>
                
                <div className="space-y-3 pt-4 border-t border-white/20">
                 
                  <button
                    onClick={() => setSelectedBranch(null)}
                    className="w-full px-4 py-2 bg-white/20 text-white rounded-lg font-bold hover:bg-white/30 transition-colors"
                  >
                    Clear Selection
                  </button>
                </div>
              </div>
            )}

            {!selectedBranch && (
              <div className="flex-1 p-6 bg-gray-100 rounded-lg flex items-center justify-center relative z-20">
                <p className="text-gray-600 font-semibold text-center">Select a branch from the dropdown to see details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
