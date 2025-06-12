import { Controller, Post, Body } from '@nestjs/common';

@Controller('cart')
export class CartController {
  @Post()
  saveCart(@Body() cart: any) {
    // Ici tu fais ce que tu veux: sauvegarder en BDD, etc.
    return { received: cart };
  }
}
