// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "https://esm.sh/v135/@supabase/functions-js@2.4.2/src/edge-runtime.d.ts"
import { corsHeaders } from "../_shared/cors.ts";
import { Redis } from "@upstash/redis";
import {Ratelimit} from "@upstash/rate-limit"
// import { CreateClient } from "@supabase/supabase-js";

console.log("Hello from Functions!")

Deno.serve(async (req) => {
  try {
    // const supabaseClient = CreateClient(Deno.env)
    const redis = new Redis({
      url: Deno.env.get("UPSTASH_REDIS_REST_URL")!,
      token: Deno.env.get("UPSTASH_REDIS_REST_TOKEN")!,
    })
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders })
    }
    const ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(20, "60 s"),
      analytics: true,
    })
    const identifier = "api";
    const {success} = await ratelimit.limit(identifier);
    if (!success) {
      throw new Error("Requests limit exceeded, slow down dude!")
    }
  
    const { secret } = await req.json()
    if (secret == "follow_the_white_rabbit_000") {
      const data = {
        message: `CONGRATULATIONS, you just captured the flag!`,
      }
      return new Response(
        JSON.stringify(data),
        { headers: {...corsHeaders, "Content-Type": "application/json" }, status: 200 },
      )
      
    } else {
      return new Response(
        JSON.stringify({message: "ah ah ah you didn't say the magic word!"}),
        { headers: {...corsHeaders, "Content-Type": "application/json" }, status: 401 },
      )
    }
    
  } catch (error) {
    return new Response(JSON.stringify({error:error.message}), {headers: {...corsHeaders, "Content-Type": "application/json"}, status: 429}) 
  }

})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/hello' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
