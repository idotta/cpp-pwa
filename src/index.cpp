#include <emscripten/val.h>
#include <functional>
#include <codecvt>
#include <locale>
#include <string>
#include <cmath>

void render();
asmdom::VNode *current_view = NULL;

int counter = 1;
long nthPosition = 1;
long primeValue = 2;

bool decrease(emscripten::val)
{
  counter--;
  render();
  return true;
};

bool increase(emscripten::val)
{
  counter++;
  render();
  return true;
};

constexpr long MAX_NUMBER = 100000005;

// Function to generate Nth prime number using Sieve of Eratosthenes
long nthPrime(long n)
{
  if (n >= MAX_NUMBER)
    return -1;
  if (n < 2)
    return 2;
  if (n == 2)
    return 3;
  long limit, root, count = 1;
  limit = (n * (log(n) + log(log(n)))) + 3;
  root = sqrt(limit) + 1;
  limit = (limit - 1) / 2;
  root = root / 2 - 1;
  
  std::vector<bool> sieve(limit);
  for (int i = 0; i < root; ++i)
  {
    if (!sieve[i])
    {
      ++count;
      for (int j = 2 * i * (i + 3) + 3, p = 2 * i + 3; j < limit; j += p)
      {
        sieve[j] = true;
      }
    }
  }
  int p;
  for (p = root; count < n; ++p)
  {
    if (!sieve[p])
    {
      ++count;
    }
  }
  return 2 * p + 1;
}

namespace Action
{
  typedef std::function<long(void)> action;
action Calculate(long nth)
{
  return [nth]() -> long {
    primeValue = nthPrime(nth);
    return primeValue;
  };
};

} // namespace Action

constexpr int KEY_ENTER = 13;

std::wstring utf8_to_wstring(const std::string& str) {
  std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
  return converter.from_bytes(str);
};

std::string wstring_to_utf8(const std::wstring& str) {
  std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
  return converter.to_bytes(str);
};

void render()
{
  asmdom::VNode *new_node = (
    <div class="root">
      <div style="margin:48px">
        <h5>Simple counter sample</h5>
        <a class = "button" onclick = {decrease}> 
          - 
        </a>
        {{std::to_string(counter)}}
        <a class = "button" onclick = {increase}>
          +
        </a>
      </div>

      <div style="margin:48px">
        <h5>Nth prime number calculator</h5>
        <input type="number" name="position" min="1" placeholder="Type the prime number position" value={nthPosition}
        onkeydown={[](emscripten::val e) -> bool {
          std::string value = wstring_to_utf8(e["target"]["value"].as<std::wstring>());
          if (e["keyCode"].as<int>() == KEY_ENTER && !value.empty()) {
            nthPosition = std::stol(value);
            primeValue = nthPrime(nthPosition);
            render();
          }
          return true;
        }}
        />
        <div>
          {{std::to_string(primeValue)}}
        </div>
      </div>

      <div style="position:absolute; bottom:8px; font-size:12px;">
        A POC of an asm - dom turned into a PWA
      </div>
    </div>
  );

  current_view = asmdom::patch(current_view, new_node);
};

int main()
{
  asmdom::Config config;
  asmdom::init(config);

  current_view = <div class = "root" />;
  asmdom::patch(
      emscripten::val::global("document").call<emscripten::val>("getElementById", std::string("root")),
      current_view);

  render();

  return 0;
};