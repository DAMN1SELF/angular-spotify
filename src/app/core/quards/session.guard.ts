import { CookieService } from 'ngx-cookie-service';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const sessionGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService); // Inyectamos el servicio de cookies
  const router = inject(Router); // Inyectamos el Router

  return checkCookieSession(cookieService, router);
};


// Función para verificar si la cookie existe
function checkCookieSession(cookieService: CookieService, router: Router): boolean {
  try {
    const token: boolean = cookieService.check('token_service');
    console.log('Cookie encontrada:', token);

    if (!token) {
      console.log('No se encontró la cookie, redirigiendo a login...');
      router.navigate(['/auth/login']); // Ahora usamos el Router inyectado
    } else {
      console.log('Cookie válida, permitiendo acceso.');
    }
    return token;
  } catch (error) {
    console.error('Error al verificar la cookie:', error);
    return false;
  }
}
