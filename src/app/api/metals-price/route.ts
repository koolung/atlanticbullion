import { NextRequest, NextResponse } from 'next/server'

// const API_KEY = 'zQIw9bBF_fOxB3nFTMbwtt9q7bMGxbml'
const API_KEY = ''
const BASE_URL = 'https://api.polygon.io'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const symbol = searchParams.get('symbol')
    const date = searchParams.get('date')

    if (!symbol || !date) {
      return NextResponse.json(
        { error: 'Symbol and date parameters are required' },
        { status: 400 }
      )
    }

    console.log(`Fetching data for ${symbol} on ${date}`)

    // Use Polygon.io (Massive.com) REST API for daily aggregates
    const url = `${BASE_URL}/v2/aggs/ticker/${symbol}/range/1/day/${date}/${date}?apikey=${API_KEY}`
    console.log('Requesting URL:', url.replace(API_KEY, '[HIDDEN]'))
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Atlantic-Bullion/1.0'
      },
    })

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`)
      return NextResponse.json(
        { 
          status: 'ERROR',
          error: `API Error: ${response.status} ${response.statusText}` 
        },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('API Response status:', data.status, 'Results count:', data.resultsCount)
    
    if (data.status !== 'OK') {
      console.error('API returned non-OK status:', data)
      
      // If no data for this date, try to return helpful error
      if (data.status === 'DELAYED' || data.resultsCount === 0) {
        return NextResponse.json(
          { 
            status: 'ERROR',
            error: 'Market data not available for this date (market may be closed)' 
          },
          { status: 404 }
        )
      }
      
      return NextResponse.json(
        { 
          status: 'ERROR',
          error: data.message || 'API request failed' 
        },
        { status: 400 }
      )
    }

    // Return the data in the expected format
    const result = {
      status: 'OK',
      results: data.results || [],
      count: data.resultsCount || 0
    }
    
    console.log('Returning data:', result)
    return NextResponse.json(result)

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { 
        status: 'ERROR',
        error: 'Server error fetching price data' 
      },
      { status: 500 }
    )
  }
}