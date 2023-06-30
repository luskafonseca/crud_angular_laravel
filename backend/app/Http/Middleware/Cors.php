<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure  $next
     * @param  array  $headers
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type');
        
        return $response;
    }
}
