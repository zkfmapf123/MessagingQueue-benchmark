# MessagingQueue BenchMark

## Issue

### CloudFront + React

```sh
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.
```

- ASIS
    
```sh
<script type="module" crossorigin src="/assets/index-f40OySzR.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-DiwrgTda.css">
```

- TOBE (Solution)

```sh
<script type="module" crossorigin src="./assets/index-f40OySzR.js"></script>
<link rel="stylesheet" crossorigin href="./assets/index-DiwrgTda.css">
```