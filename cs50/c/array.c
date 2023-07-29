#include <stdio.h>
#include <stdlib.h>

int main(void) {
  char name;
  printf("Digite seu nome: ");
  scanf("%s", &name);
  printf("Seu nome: %s\n", &name);

  int words[2];

  words[0] = 1;
  words[1] = 2;

  printf("%d\n", words[0]);
  printf("%d\n", words[1]);

  return EXIT_SUCCESS;
}
